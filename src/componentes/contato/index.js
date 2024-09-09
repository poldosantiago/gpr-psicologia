import styles from './contato.module.css';

function Contato() {
    return ( 
        <section className={styles.contato}>
            <h3 className={styles.titulo}>Contato</h3>

            <form>
                <div className={styles.campo_content}>
                    <label htmlFor='nome'>Nome</label>
                    <input type='text' id='nome' placeholder='seu nome' /> 
                </div>

                <div className={styles.campo_content}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='seu email' /> 
                </div>

                <div className={styles.campo_content}>
                    <label htmlFor='mensagem'>Mensagem</label>
                    <textarea className={styles.form__textarea} id="mensagem" placeholder='Digite sua mensagem'></textarea>
                </div>

                <input type='submit' className={styles.form__botao} value="Enviar mensagem"/>
            </form>
        </section>
     );
}

// cols="80" rows="10"

export default Contato;