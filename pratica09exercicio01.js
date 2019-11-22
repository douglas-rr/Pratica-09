/* Função para não permitir que os campos passem sem resposta */

function validarFormulario() {

    if (login.value == "" || email.value == "" || datnasc.value == "" || senha.value == "" || confsenha.value == "" || sexo == "" || cidade.value == "") {
        alert("Todos os campos precisam estar preenchidos!");
    }
}




/* Função para voltar com Https */

function voltaHttp() {
    if (home.value.length <= 7 & home.value != "http://" || home.value.length(7) != "http://") {
        home.value ="http://";
    }
}
