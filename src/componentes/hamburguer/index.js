import classNames from 'classnames';
import styles from './hamburguer.module.css';
import CabecalhoLink from 'componentes/cabecalho_link';
import { useState } from 'react';
import { useScreenWidth } from './customHook';

function Hamburguer() {
    
    const [isPressed, setIsPressed] = useState(false);
    const tamanhoAtualdaTela = useScreenWidth(); //hook customizado que identifica o tamanho da tela
    
    //fecha o menu retratio caso a tela aumente 
    window.addEventListener('resize', () => {
        if(tamanhoAtualdaTela > 520){
            setIsPressed(false);
            // console.log('entrou aqui:');
        }
    });

    return (
        <>
            <div 
                className={styles.hamburguer} 
                onClick={() => isPressed?setIsPressed(false):setIsPressed(true)}
            >
                <i className="fa fa-bars"></i>
            </div>

            <div className={classNames(styles.menu_retratio, isPressed ? styles.ativo: '')}>
                <CabecalhoLink tipo="retro_link" url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink tipo="retro_link" url="./Favoritos">
                    Quem Somos
                </CabecalhoLink>
            </div>
        </>     
     );
}

export default Hamburguer;