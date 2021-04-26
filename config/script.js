//Pega quantidade

//Quantidade Produto 1
function adicionarProduto(){
    var quantidaDoProduto1 = document.querySelector(".quantidade").value
    var precoAtual = document.querySelector(".precoProdutos")

    precoAtual = 2000

    quantidaDoProduto1 = precoAtual * quantidaDoProduto1

    document.querySelector(".precoProdutoNaTela"). innerHTML = quantidaDoProduto1
}


//Quantidade Produto 2
function adicionarProduto2(){
    var quantidaDoProduto2 = document.querySelector(".quantidade2").value
    var precoAtual = document.querySelector(".precoProdutos")

    precoAtual = 5200

    quantidaDoProduto2 = precoAtual * quantidaDoProduto2

    document.querySelector(".precoProdutoNaTela2"). innerHTML = quantidaDoProduto2
}


//Quantidade Produto 3
function adicionarProduto3(){
    var quantidaDoProduto3 = document.querySelector(".quantidade3").value
    var precoAtual = document.querySelector(".precoProdutos")

    precoAtual = 2500

    quantidaDoProduto3 = precoAtual * quantidaDoProduto3

    document.querySelector(".precoProdutoNaTela3"). innerHTML = quantidaDoProduto3
}

//Carrinho Total
function carrinhoProdutos(){
    
}

//Fecha Modais

function fechaModal1(){
    document.querySelector(".modal-wrapper").style.display = "none"
}

function fechaModal2(){
    document.querySelector(".modal-wrapper2").style.display = "none"
}

function fechaModal3(){
    document.querySelector(".modal-wrapper3").style.display = "none"
}

//Detalhes produtos

function detalhesProduto1(){
    document.querySelector(".modal-wrapper").style.display = "block"
}

function detalhesProduto2(){
    document.querySelector(".modal-wrapper2").style.display = "block"
}

function detalhesProduto3(){
    document.querySelector(".modal-wrapper3").style.display = "block"
}