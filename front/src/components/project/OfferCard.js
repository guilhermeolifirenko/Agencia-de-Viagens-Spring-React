import styles from './OfferCard.module.css'

import BandeiraItalia from '../img/bandeira-italia.png'
import BandeiraGrecia from '../img/bandeira-grecia.png'
import BandeiraAlemanha from '../img/bandeira-alemanha.png'
import BandeiraEgito from '../img/bandeira-egito.png'
import BandeiraAustralia from '../img/bandeira-australia.png'

function OfferCard() {
    return (
        <section className={styles.row}>
            <div className={styles.container}>
                <div>
                    <div className={styles.oferta0}>
                        <div className={styles.card_oferta}>
                            <div className={styles.imagem}>
                                <img src={BandeiraItalia} alt="Bandeira da Itália" />
                            </div>
                            <div className={styles.content}>
                                <button>10% OFF</button>
                                <p>Roma, Itália</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.oferta1}>
                        <div className={styles.card_oferta}>
                            <div className={styles.imagem}>
                                <img src={BandeiraGrecia} alt="Bandeira da Grécia" />
                            </div>
                            <div className={styles.content}>
                                <button>15% OFF</button>
                                <p>Santorini, Grécia</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.oferta2}>
                        <div className={styles.card_oferta}>
                            <div className={styles.imagem}>
                                <img src={BandeiraEgito} alt="Bandeira do Egito" />
                            </div>
                            <div className={styles.content}>
                                <button>20% OFF</button>
                                <p>Cairo, Egito</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.oferta3}>
                        <div className={styles.card_oferta}>
                            <div className={styles.imagem}>
                                <img src={BandeiraAlemanha} alt="Bandeira da Alemanha" />
                            </div>
                            <div className={styles.content}>
                                <button>10% OFF</button>
                                <p>Füssen, Alemanha</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.oferta4}>
                        <div className={styles.card_oferta}>
                            <div className={styles.imagem}>
                                <img src={BandeiraAustralia} alt="Bandeira da Austrália" />
                            </div>
                            <div className={styles.content}>
                                <button>15% OFF</button>
                                <p>Melbourne, Austrália</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferCard