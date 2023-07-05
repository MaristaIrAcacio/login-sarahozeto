//bloco de verificação de preenchimento de campos

function Verifica(){
    let user = document.getElementById('email').value;
    let senha = document.getElementById('subject').value;

    if(!user || !senha){
        alert("Por favor preencha todos os campos obrigatórios!");
    } else{
        window.location.href = "aula2.html";
    }
}

//função para criar a lista de usuários
//---cria o array para guardar os usuários
var dadosLista = [];
function salvarUsuario(){
    let nomeUsuario = document.getElementById("nomeUsuario").value;

    if(nomeUsuario){
        dadosLista.push(nomeUsuario);
        console.log(dadosLista);
    }
} 
