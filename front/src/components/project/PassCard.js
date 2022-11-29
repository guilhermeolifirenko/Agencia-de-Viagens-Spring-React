import styles from './PassCard.module.css';

import React from 'react';

import { FaPen } from 'react-icons/fa';

function PassCard({ vetor, selecionar }) {

    return (
        <>
            {
                vetor.map((obj, indice) => (
                    <div key={indice} className={styles.card}>
                        <h4>{obj.chegada}</h4>
                        <p>
                            <span>Código: </span>{indice + 1}
                        </p>
                        <p>
                            <span>Partida: </span>{obj.partida}
                        </p>
                        <p>
                            <span>Chegada: </span>{obj.chegada}
                        </p>
                        <p>
                            <span>Data: </span>{obj.data}
                        </p>
                        <p>
                            <span>Passageiros: </span>{obj.passageiros}
                        </p>
                        <div className={styles.card_actions}>
                            <button onClick={() => { selecionar(indice)}}>
                                <FaPen />
                                Editar
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default PassCard