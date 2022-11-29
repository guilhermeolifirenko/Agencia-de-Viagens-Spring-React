import styles from './Voos.module.css'

import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa'

import Banner from '../img/banner3.jpg';
import PassCard from '../project/PassCard';
import EditCard from './EditCard';

function Voos() {

    // Objeto Passagem
    const passagem = {
        codigo: 0,
        partida: '',
        chegada: '',
        data: '',
        passageiros: 0
    }

    // UseState
    const [passagens, setPassagens] = useState([]);
    const [objPassagem, setObjPassagem] = useState(passagem);

    // UseEffect
    useEffect(() => {
        fetch("http://localhost:8080/listar")
            .then(retorno => retorno.json())
            .then(retorno_convertido => setPassagens(retorno_convertido));
    }, []);

    // Obtendo dados
    const aoDigitar = (e) => {
        setObjPassagem({ ...objPassagem, [e.target.name]: e.target.value });
        console.log(objPassagem);
    }

    // Cadastrar Passagem
    const cadastrar = () => {
        fetch('http://localhost:8080/cadastrar', {
            method: 'post',
            body: JSON.stringify(objPassagem),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(retorno => retorno.json())
            .then(retorno_convertido => {
                if (retorno_convertido.mensagem !== undefined) {
                    alert(retorno_convertido.mensagem);
                } else {
                    setPassagens([...passagens, retorno_convertido]);
                    alert('Passagem cadastrada com sucesso!');
                }
            })
    }

    // Alterar Passagem
    const alterar = () => {
        fetch('http://localhost:8080/alterar', {
            method: 'put',
            body: JSON.stringify(objPassagem),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(retorno => retorno.json())
            .then(retorno_convertido => {
                if (retorno_convertido.mensagem !== undefined) {
                    alert(retorno_convertido.mensagem);
                } else {
                    // Cópia do vetor de passagem
                    let vetorTemp = [...passagens];

                    // Índice
                    let indice = vetorTemp.findIndex((p) => {
                        return p.codigo === objPassagem.codigo;
                    });

                    // Alterar passagem do VetorTemp
                    vetorTemp[indice] = objPassagem;

                    // Atualizar o vetor de Passagem
                    setPassagens(vetorTemp);

                    // Mensagem
                    alert('Passagem alterada com sucesso!');

                    setEditarPassagem(true);
                }
            })
    }

    // Remover Passagem
    const remover = () => {
        fetch('http://localhost:8080/remover/' + objPassagem.codigo, {
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(retorno => retorno.json())
            .then(retorno_convertido => {

                // Mensagem
                alert(retorno_convertido.mensagem);

                // Cópia do vetor de passagem
                let vetorTemp = [...passagens];

                // Índice
                let indice = vetorTemp.findIndex((p) => {
                    return p.codigo === objPassagem.codigo;
                });

                // Remover passagem do VetorTemp
                vetorTemp.splice(indice, 1);

                // Atualizar o vetor de Passagem
                setPassagens(vetorTemp);

            })
        setEditarPassagem(true);
    }

    const [editarPassagem, setEditarPassagem] = useState(true);

    // Scroll
    function backTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    // Selecionar Passagem
    const selecionarPassagem = (indice) => {
        setObjPassagem(passagens[indice]);
        setEditarPassagem(false);
        backTop();
    }

    return (
        <section className={styles.container}>
            {
                editarPassagem
                    ?
                    <div>
                        <div>
                            <img src={Banner} alt='Banner' />
                        </div>
                        <div className={styles.destino}>
                            <form>
                                <div className={styles.opcoes_destino}>
                                    <div className={styles.item}>
                                        <p>Local de Saída</p>
                                        <input type="text" onChange={aoDigitar} className="form-control" placeholder="Estou saindo de" name="partida" />
                                    </div>
                                    <div className={styles.item}>
                                        <p>Local de chegada</p>
                                        <input type="text" onChange={aoDigitar} className="form-control" placeholder="Estou indo para" name="chegada" />
                                    </div>
                                    <div className={styles.item}>
                                        <p>Data</p>
                                        <input type="date" onChange={aoDigitar} className="form-control" placeholder="Selecione a data" name="data" />
                                    </div>
                                    <div className={styles.item}>
                                        <p>Passageiros</p>
                                        <input type="number" onChange={aoDigitar} className="form-control" placeholder="Quantos passageiros" name="passageiros" />
                                    </div>
                                    <div className={styles.item}>
                                        <button onClick={cadastrar}>
                                            <FaSearch />
                                            Verificar Disponibilidade
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={styles.container_card}>
                            <h1>Suas Passagens</h1>
                            <div className={styles.passagens}>
                                <PassCard vetor={passagens} selecionar={selecionarPassagem} />
                            </div>
                        </div>
                    </div>
                    :
                    <EditCard remover={remover} cancelar={setEditarPassagem} alterar={alterar} aoDigitar={aoDigitar} obj={objPassagem} />
            }

        </section>
    )
}

export default Voos