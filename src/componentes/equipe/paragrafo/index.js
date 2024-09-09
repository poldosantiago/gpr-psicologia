import styles from './paragrafo.module.css';

function Paragrafo({children}) {
    return ( 
        <p className={styles.paragrafo}>{children}</p>
    );
}

export default Paragrafo;