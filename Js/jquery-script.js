// Inicializa o Jquery quando o documento estiver pronto [cite: 518]
$(document).ready(function(){
    // Ação ao clicar no botão "Não é cadastrado ainda? Cadastre-se" [cite: 518]
    $("#botao-cadastrar").click(function(){
        // Faz o formulário de cadastro aparecer/sumir suavemente [cite: 518]
        $("#form-cadastrar").slideToggle("slow");
        // Faz a seção de login desaparecer/aparecer suavemente [cite: 518, 519]
        $("#section-login").slideToggle("slow");
        // Faz o botão "Não é cadastrado ainda? Cadastre-se" sumir [cite: 519]
        $("#botao-cadastrar").hide();
    });
});
