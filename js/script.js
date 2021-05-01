//Adiciona e remove produto


function addProduto(){
    //Sistema de add e remove
    var produtoAdicionado = document.querySelector(".quantidadeProduto").value
    var produtoAdicionadoStatus = document.querySelector(".quantidadeProduto").value
    
    var valorAtual = 10

    var produtoAdicionado = valorAtual * produtoAdicionado;

    var resultadoDoProduto = document.querySelector(".resultadoProduto").innerHTML = "Preço: " + produtoAdicionado + ",00";

   //Status
    document.querySelector(".statusEnvioSucesso").innerHTML = produtoAdicionadoStatus + " Produtos adicionados ao carrinho"
    
    document.querySelector(".statusEnvioSucesso").style.display = "block"

    //Resultado no carrinho
    document.querySelector(".resultado-total").innerHTML = "R$ " + produtoAdicionado + ",00"

}



