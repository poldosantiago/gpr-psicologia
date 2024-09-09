import styles from './banner.module.css';

function Banner({numeroImagem, titulo, descricao}) {
    return ( 
        <section className={styles.banner} style={{ backgroundImage: `url('/imagens/banner${numeroImagem}.png')`}}>
                <h2 className={styles.titulo}>{titulo}</h2>
                <h3 className={styles.descricao}>{descricao}</h3>
        </section>
     );
}

export default Banner;

//