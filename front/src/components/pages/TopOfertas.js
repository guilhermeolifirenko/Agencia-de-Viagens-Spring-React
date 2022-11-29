import styles from './TopOfertas.module.css'

import OfferCard from '../project/OfferCard'

function TopOfertas() {
    return (
        <section>
            <div className={styles.titulo}>
                <p>dedicadas a você</p>
                <h1>Top Ofertas</h1>
                <p className={styles.sombra}>Ofertas</p>
                <div className={styles.container}>
                    <OfferCard/>
                </div>
            </div>
        </section>
    )
}

export default TopOfertas