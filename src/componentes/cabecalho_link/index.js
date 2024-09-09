import { Link } from 'react-router-dom';
import styles from './cabecalho_link.module.css';

function CabecalhoLink({url, children, tipo='link'}) {
    return ( 
        <Link to={url} className={styles[tipo]}>
            {children}
        </Link>
     );
}

export default CabecalhoLink;