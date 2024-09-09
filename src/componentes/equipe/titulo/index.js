import styles from './titulo.module.css';

function Titulo({children}) {
    return ( 
        <h3 className={styles.titulo}>{children}</h3>
    );
}

export default Titulo;