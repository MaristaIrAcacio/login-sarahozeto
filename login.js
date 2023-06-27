//bloco de verificação de preenchimento de campos

function Verifica(){
    let user = document.getElementById('email').value;
    let senha = document.getElementById('subject').value;

    if(!user || !senha){
        alert("Por favor preencha todos os campos obrigatórios!");
    } else{
        alert("Campos preechidos com sucesso!");
    }
}