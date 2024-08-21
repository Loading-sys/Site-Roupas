const handleSubmit = (event) => {
    event.preventDefault();

    const Nome = document.querySelector('input[name=Nome]').value;
    const Email = document.querySelector('input[name=Email]').value;
    const Numero = document.querySelector('input[name=Numero]').value;
    const CEP = document.querySelector('input[name=CEP]').value;
    const Logradouro = document.querySelector('input[name=Logradouro]').value;
    const Número = document.querySelector('input[name=Número]]').value;
    const Complemento = document.querySelector('input[name=Complemento]').value;
    const Bairro = document.querySelector('input[name=Bairro]').value;
    const Cidade = document.querySelector('input[name=Cidade]').value;
    const Estado = document.querySelector('input[name=Estado]').value;
    const CPF = document.querySelector('input[name=CPF]').value;



    const data = {
        name: Nome,
        email: Email,
        numero: Numero,
        cep: CEP,
        logradouro: Logradouro,
        numeroendereco: Número,
        complemento: Complemento,
        bairro: Bairro,
        cidade: Cidade,
        estado: Estado,
        cpf: CPF,
    };

    fetch('https://api.sheetmonkey.io/form/gCNGFqH14gSxSJAUuwsUWt',{

        method:'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),

   }).then(window.location.href = 'https://www.youtube.com/?gl=BR');
}

document.querySelector('form').addEventListener('submit', handleSubmit);