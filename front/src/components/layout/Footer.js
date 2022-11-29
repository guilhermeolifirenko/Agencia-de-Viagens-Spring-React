import styles from './Footer.module.css'

import {FaLinkedinIn, FaYoutube, FaFacebookF, FaInstagram} from 'react-icons/fa'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <p className={styles.titulo}>Sobre nós</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus provident, odit minima quos veniam expedita totam quo cumque quam aspernatur sequi deleniti placeat incidunt repudiandae.</p>
                    <ul className={styles.social}>
                        <li><a href="#" target="_blank" rel="external"><FaLinkedinIn/></a></li>
                        <li><a href="#" target="_blank" rel="external"><FaYoutube/></a></li>
                        <li><a href="#" target="_blank" rel="external"><FaFacebookF/></a></li>
                        <li><a href="#" target="_blank" rel="external"><FaInstagram/></a></li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <p className={styles.titulo}>Links</p>
                    <ul>
                        <li><a href="#" rel="self">Início</a></li>
                        <li><a href="#" rel="self">Sobre</a></li>
                        <li><a href="#" rel="self">Serviços</a></li>
                        <li><a href="#" rel="self">Contato</a></li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <p className={styles.titulo}>Serviços</p>
                    <ul>
                        <li><a href="#" rel="self">Turismo</a></li>
                        <li><a href="#" rel="self">Guia</a></li>
                        <li><a href="#" rel="self">Seguro Viagem</a></li>
                        <li><a href="#" rel="self">Aluguel de Carro</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.copy_right}>
                <p className={styles.titulo_destaque}>Travels</p>
                <p> &copy; Copyright By <a href="https://www.linkedin.com/in/guilherme-olifirenko-0066351b8" target="_blank" rel="external">@Guilherme</a> - 2022</p>
            </div>
        </footer>
    )
}

export default Footer