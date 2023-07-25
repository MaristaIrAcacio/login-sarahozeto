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
    let nomeUsuario = document.getElementById("nomeUser").value;

    if(nomeUsuario){
        dadosLista.push(nomeUsuario);
        criaLista();
        document.getElementById(nomeUser).value = ''
        //console.log(dadosLista);
    }
}
function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome usuário:</th><th>Ações:</ th></tr>";

    for(let i=0; i<= (dadosLista.length -1); i++){
        tabela += "<tr><td>" + dadosLista[i]  + "</td><td> <button onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela; 
    }
}

//FUNÇÃO PARA EDIÇÃO DE NOME

function editar(i){
    document.getElementById("nomeUser").value = dadosLista[(i - 1)]; 
    dadosLista.splice(dadosLista[(i -1 )], 1);
}

//FUNÇÃO PARA EXCLUIR NOME

function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);
}

