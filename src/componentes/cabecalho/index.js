import { Link } from "react-router-dom";
import logo from './logo02.png';
import styles from './cabecalho.module.css';
import CabecalhoLink from "../cabecalho_link";
import Hamburguer from "componentes/hamburguer";

function Cabecalho() {
    return ( 
        <header className={styles.cabecalho}>
            <Link to="./" className={styles.logo_content}>
                <img src={logo} className={styles.logo} alt="logo do cinetag" style={{marginLeft: "10px"}}/>
                <h1 className={styles.titulo}>GPR Psicologia</h1>
            </Link>

            <nav className={styles.nav} style={{marginRight: "12px"}}>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="#quem_somos">
                    Quem Somos
                </CabecalhoLink>
                <CabecalhoLink url="#contato">
                    Contato
                </CabecalhoLink>
            </nav>
            <Hamburguer/>
        </header>
     );
}

export default Cabecalho;