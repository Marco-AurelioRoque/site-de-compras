//Modal
function fechaModal() {
    document.querySelector(".modalCart").style.display = "none"
}

function abreModalCart() {
    document.querySelector(".modalCart").style.display = "block"
}

function addProduto(){
    //Sistema de add e remove
    var produtoAdicionado = document.querySelector(".quantidadeProduto").value
    var produtoAdicionadoStatus = document.querySelector(".quantidadeProduto").value
    
    var valorAtual = 10

    var produtoAdicionado = valorAtual * produtoAdicionado;

   //Status
    document.querySelector(".statusEnvioSucesso").innerHTML = "Produtos adicionados ao carrinho"
    
    document.querySelector(".statusEnvioSucesso").style.display = "block"

    //Resultado no carrinho
    document.querySelector(".resultado-total").innerHTML = " R$ " + produtoAdicionado + ",00"
    
    //resultado produtos cart

    document.querySelector(".resultado-produtos").innerHTML = produtoAdicionadoStatus
    document.querySelector(".resultado-total-produto").innerHTML = produtoAdicionado + ",00"

}

function deletarProduto() {
    document.querySelector(".resultado-produtos").innerHTML = ""
    document.querySelector(".resultado-total-produto").innerHTML = ""
    document.querySelector(".modalCart").style.display = "none"
    document.querySelector(".resultado-total").innerHTML = " R$ " + "0,00"
    document.querySelector(".statusEnvioSucesso").style.display = "none"
}












