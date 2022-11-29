import styles from './TopHeader.module.css'

import { FaPhone, FaEnvelope, FaUser } from 'react-icons/fa'

function TopHeader() {
    return (
        <div className={styles.top_header}>
            <ul>
                <li>
                    <FaPhone />
                    (41) 9 9999-9999
                </li>
                <li>
                    <FaEnvelope />
                    suportetravels@gmail.com
                </li>
            </ul>
            <ul>
                <li>
                    <FaUser />
                    Entrar / Cadastro
                </li>
            </ul>
        </div>
    )
}

export default TopHeader