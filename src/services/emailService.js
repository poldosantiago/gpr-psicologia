export async function enviarMensagem(nome, email, mensagem){

    // eslint-disable-next-line
    const urlLocal = 'http://localhost:3005/email/enviar';
    const urlProducao = 'https://gpr-psicologia-backend.vercel.app/email/enviar';

    const conteudo = {
        name: nome,
        email,
        content: mensagem
    }

    try {
        // const response = await fetch('http://localhost:3005/email/enviar', 
        const response = await fetch(urlProducao, 
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(conteudo)
            });
        const result = await response.json();

        console.log('result', result);

        return result;
        
    } catch (error) {
        return error;
    }
}