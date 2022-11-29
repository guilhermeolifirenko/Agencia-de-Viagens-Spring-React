import styles from './Navbar.module.css'

import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink,
} from 'reactstrap';

function Navbar(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <Nav className={styles.navbar}>
            <div className={styles.logo}>
                <a className="navbar-brand" href="/" rel="self">Travels</a>
            </div>
            <NavItem className={styles.nav_link}>
                <NavLink href="/">Início</NavLink>
            </NavItem>
            <NavItem className={styles.nav_link}>
                <NavLink href="/voos">Voos</NavLink>
            </NavItem>
            <NavItem className={styles.nav_link}>
                <NavLink href="#">Hotéis</NavLink>
            </NavItem>
            <NavItem className={styles.nav_link}>
                <NavLink href="#">Resorts</NavLink>
            </NavItem>
            <NavItem className={styles.nav_link}>
                <NavLink href="/ofertas">Top Ofertas</NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                    Mais
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Aluguel de Carros</DropdownItem>
                    <DropdownItem>Seguro Viagem</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Nav>
    );
}

export default Navbar