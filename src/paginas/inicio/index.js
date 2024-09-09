import Banner from "componentes/banner";
import Cabecalho from "componentes/cabecalho";
import Container from "componentes/container";
import Contato from "componentes/contato";
import Equipe from "componentes/equipe";

function Inicio() {
    return ( 
        <>
            <Cabecalho />
            <Container>
                <Banner
                    numeroImagem="1"
                    titulo="Lorem ipsum dolor sit amet"
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed interdum ante. Maecenas vitae odio neque. Cras semper consequat sem"    
                />

                <Equipe/>
                <Contato/>
            </Container>
        </>
    );
}

export default Inicio;