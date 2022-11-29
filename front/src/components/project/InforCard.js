import styles from './InforCard.module.css'

import { FaMapMarker, FaGlobeAmericas, FaClinicMedical } from 'react-icons/fa'

function InforCard() {
    return (
        <div className={styles.servicos}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.cards_design}>
                        <FaMapMarker />
                        <h4>Hotéis bem avaliados</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed ad, debitis praesentium deserunt nam soluta expedita nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#">Leia Mais</a>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.cards_design}>
                        <FaGlobeAmericas />
                        <h4>Travels milhas</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed ad, debitis praesentium deserunt nam soluta expedita nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#">Leia Mais</a>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.cards_design}>
                        <FaClinicMedical />
                        <h4>Seguro Viagem</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed ad, debitis praesentium deserunt nam soluta expedita nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#">Leia Mais</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InforCard