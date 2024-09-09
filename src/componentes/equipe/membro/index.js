import styles from './membro.module.css';

function Membro({numeroMembro, nome, especialidade, hobbies}) {
    return ( 
        <div className={styles.membro}>
            <img 
                className={styles.imagem}
                src={`${process.env.PUBLIC_URL}/imagens/membro${numeroMembro}.png`} 
                alt={`imagem do ${numeroMembro}º membro da equipe de psicólogos`}
            />

            <div className={styles.texto_content}>
                <h3 className={styles.nome}>{nome}</h3>
                <p className={styles.descricao}>{`Especialidade: ${especialidade}`}</p>
                <p className={styles.descricao}>{`Hobbies: ${hobbies}`}</p>
            </div>
        </div>
    );
}

export default Membro;