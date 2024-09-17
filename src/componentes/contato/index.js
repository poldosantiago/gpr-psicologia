import { useState } from 'react';
import styles from './contato.module.css';
import { useAlertaContext } from 'contextos/alerta';
import { enviarMensagem } from 'services/emailService.js';

import { useRef } from 'react';

function Contato() {
    const contatoRef = useRef();

    const { exibirAlerta } = useAlertaContext();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    
    function aoDigitado(evento,setCampo){
		setCampo(evento.target.value);        
	};

    async function enviar(e){
        e.preventDefault();

        const { ok } = await enviarMensagem(nome, email, mensagem);

        if(ok){
            limparFormulario();
            exibirAlerta(true);
        }


        setTimeout(() => {
            exibirAlerta(false);
        }, 3000);
    }

    function limparFormulario(){
        setNome("");
        setEmail("");
        setMensagem("");
    }

    return ( 
        <>
            <section className={styles.contato} id="contato" ref={contatoRef}>
                <h3 className={styles.titulo}>Contato</h3>

                <form onSubmit={enviar}>
                    <div className={styles.campo_content}>
                        <label htmlFor='nome'>Nome</label>
                        <input type='text' id='nome' placeholder='seu nome' onChange={(evento) => aoDigitado(evento, setNome)} value={nome}/> 
                    </div>

                    <div className={styles.campo_content}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' placeholder='seu email' onChange={(evento) => aoDigitado(evento, setEmail)} value={email}/> 
                    </div>

                    <div className={styles.campo_content}>
                        <label htmlFor='mensagem'>Mensagem</label>
                        <textarea className={styles.form__textarea} id="mensagem" placeholder='digite sua mensagem' onChange={(evento) => aoDigitado(evento, setMensagem)} value={mensagem}></textarea>
                    </div>

                    <input type='submit' className={styles.form__botao} value="Enviar mensagem"/>
                </form>
            </section>
        </>
     );
}

// required

export default Contato;