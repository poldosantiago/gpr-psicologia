import AbsoluteContent from "componentes/absolute-content";
import TransitionAlerts from "componentes/transition-alert";
import Banner from "componentes/banner";
import Cabecalho from "componentes/cabecalho";
import Container from "componentes/container";
import Contato from "componentes/contato";
import Equipe from "componentes/equipe";
import AlertaProvider from "contextos/alerta";
import Rodape from "componentes/rodape";

function Inicio() {
    return ( 
        <>
            <AlertaProvider>
                <Cabecalho />

                <AbsoluteContent>
                    <TransitionAlerts mensagem="email enviado com sucesso!"/>
                </AbsoluteContent>

                <Container>
                    <Banner
                        numeroImagem="1"
                        titulo="Lorem ipsum dolor sit amet"
                        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed interdum ante. Maecenas vitae odio neque. Cras semper consequat sem"    
                    />
                    <Equipe/>
                    <Contato/>
                </Container>
                <Rodape/>
            </AlertaProvider>
        </>
    );
}

export default Inicio;