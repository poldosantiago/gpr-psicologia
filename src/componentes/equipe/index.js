import styles from './equipe.module.css'
import Paragrafo from "./paragrafo";
import Titulo from "./titulo";
import Membro from './membro';

import membros from './dados.json';


function Equipe() {

    return ( 
        <section className={styles.equipe}>
            <Titulo>Nossa História</Titulo>
            <Paragrafo>Graziela Dias, Paula Gusmão e Rafael Santiago; sócios-fundadores da GPR PSICOLOGIA, estudaram e concluíram a graduação em psicologia juntos.</Paragrafo>
        
            <Titulo id="quem_somos">Quem somos</Titulo>
            <Paragrafo>Somos um time de psicologas e psicologos que visa conectar Pacientes/Clientes aos profissionas da nossa equipe, para proprocionar atendimento especializado e de qualidade em diversas abordagens</Paragrafo>
        
            <div className={styles.membros_content}>
                {membros.map(membro => {
                    return <Membro 
                        numeroMembro={membro.id}
                        nome={membro.nome}
                        especialidade={membro.especialidade}
                        hobbies={membro.hobbies}
                        key={membro.id}
                    />
                })}
            </div>
        </section>
     );
}

export default Equipe;