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
    document.querySelector(".statusEnvioSucesso").innerHTML = produtoAdicionadoStatus + " Produtos adicionados ao carrinho"
    
    document.querySelector(".statusEnvioSucesso").style.display = "block"

    //Resultado no carrinho
    document.querySelector(".resultado-total").innerHTML = "R$ " + produtoAdicionado + ",00"
    
    //resultado produtos cart

    var titulo = document.querySelector(".tituloProduto").innerHTML = " X-BURGUER"

    document.querySelector(".resultado-produtos").innerHTML = produtoAdicionadoStatus + titulo
    document.querySelector(".resultado-sub").innerHTML = produtoAdicionado + "," + 000
    document.querySelector(".resultado-total-produto").innerHTML = produtoAdicionado + "," + 000
    

}






