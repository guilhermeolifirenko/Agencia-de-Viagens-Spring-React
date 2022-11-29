import styles from './EditCard.module.css';

import { FaTrash } from 'react-icons/fa';

function EditCard({ remover, cancelar, alterar, aoDigitar, obj}) {

    return (
        <div className={styles.container}>
            <h1>Passagem</h1>
            <div className={styles.form_control}>
                <input
                    type="text"
                    text="Partida"
                    name="partida"
                    placeholder="Estou saindo de"
                    value={obj.partida}
                    onChange={aoDigitar}
                />
                <input
                    type="text"
                    text="Chegada"
                    name="chegada"
                    placeholder="Estou indo para"
                    value={obj.chegada}
                    onChange={aoDigitar}
                />
                <input
                    type="text"
                    text="Data"
                    name="data"
                    placeholder="Data da viagem"
                    value={obj.data}
                    onChange={aoDigitar}
                />
                <input
                    type="text"
                    text="Passageiros"
                    name="passageiros"
                    placeholder="Quantidade de passageiros"
                    value={obj.passageiros}
                    onChange={aoDigitar}
                />
            </div>
            <button onClick={alterar}>Editar Passagem</button>
            <button onClick={remover}>
                <FaTrash />
                Excluir
            </button>
            <button onClick={cancelar}>Cancelar</button>
        </div>
    );
}
export default EditCard