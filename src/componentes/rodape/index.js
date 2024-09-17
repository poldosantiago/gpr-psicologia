import styles from './rodape.module.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TiktokIcon from './tiktok-icon';
import { Link } from 'react-router-dom';

function Rodape() {   
    return ( 
        <>
            <footer className={styles.rodape}>

                <div className={styles.midias_sociais}>
                    <Link to="https://www.facebook.com" target="_blank">
                        <span className={styles.fundo_midia} ><FacebookIcon fontSize="large" color="primary" /></span>
                    </Link>

                    <Link to="https://www.instagram.com/gprpsicologia/" target="_blank">
                        <span className={styles.fundo_midia} ><InstagramIcon fontSize="large" color={'secondary'} /></span>
                    </Link>
                    
                    <Link to="https://youtube.com/" target="_blank">
                        <span className={styles.fundo_midia} ><YouTubeIcon fontSize="large" color="error" /></span>
                    </Link>
                    
                    <Link to="https://wa.me/5511914494753" target="_blank">
                        <span className={styles.fundo_midia} ><WhatsAppIcon fontSize="large" color="success" /></span>
                    </Link>
                    
                    <Link to="https://www.tiktok.com/" target="_blank">
                        <span className={styles.fundo_midia} ><TiktokIcon /></span>
                    </Link>

                    
                </div>

                <p className={styles.paragrafo}>© GPR Psicologia - todos os direitos reservador</p>
            </footer>
        </> 
    );
}

export default Rodape;
