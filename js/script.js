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

    var produtoAdicionadoFinal = valorAtual * produtoAdicionado;

    //Validação
    if(produtoAdicionadoFinal < 1) {
        document.querySelector(".statusValorInvalido").innerHTML = "ERROR: Valor invalido, tente outro"
        document.querySelector(".statusValorInvalido").style.display = "block"
        document.querySelector(".statusEnvioSucesso").style.display = "none"
    } else {
        document.querySelector(".statusValorInvalido").style.display = "none"
        document.querySelector(".statusEnvioSucesso").style.display = "block"
    }

    document.querySelector(".produto-cart-span").innerHTML = "X-BURGUER"
    
   //Status
    document.querySelector(".statusEnvioSucesso").innerHTML = "Produtos adicionados ao carrinho"
    
    document.querySelector(".statusEnvioSucesso").style.display = "block"

    //Resultado no carrinho
    document.querySelector(".resultado-total").innerHTML = " R$ " + produtoAdicionadoFinal + ",00"
    
    //resultado produtos cart

    document.querySelector(".resultado-produtos").innerHTML = produtoAdicionadoStatus
    document.querySelector(".resultado-total-produto").innerHTML = produtoAdicionadoFinal + ",00"

}

//Delete produto
function deletarProduto() {
    document.querySelector(".produto-cart-span").innerHTML = ""
    document.querySelector(".resultado-produtos").innerHTML = ""
    document.querySelector(".resultado-total-produto").innerHTML = ""
    document.querySelector(".modalCart").style.display = "none"
    document.querySelector(".resultado-total").innerHTML = " R$ " + "0,00"
    document.querySelector(".statusEnvioSucesso").style.display = "none"
    document.querySelector(".quantidadeProduto").value = ""
}












