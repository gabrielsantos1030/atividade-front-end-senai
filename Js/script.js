/* Função para Rolagem Suave (Voltar ao Topo) [cite: 504] */
function topo(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

/* Função para Validação de Login [cite: 509, 510, 511, 512] */
function login(){
    var logado = 0;
    // Pega o valor do input com name='usuario' e converte para minúsculas
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    // Pega o valor do input com id='senha' e converte para minúsculas
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();

    // Verifica se os dados de login estão corretos
    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html"; // Redireciona para a Home
        logado = 1;
    }

    // Se o login falhar
    if(logado == 0){
        alert("Acesso Negado. Dados incorretos");
    }
}

/* Função para Alerta de Cadastro [cite: 521, 522] */
function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html"; // Redireciona para a Home
}
