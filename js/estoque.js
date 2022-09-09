function validarProduto(idNomeProduto, idCodBarras, idQuantidade, idValor){
    let nome= document.getElementById(idNomeProduto).value
    let codbarras = document.getElementById(idCodBarras).value
    let quantidade = document.getElementById(idQuantidade).value
    let preco = document.getElementById(idValor).value


    if (nome === ''){
        alert("O nome do produto não pode estar em branco");
    }else if (codbarras === ''){
        alert("O código do produto não pode estar em branco");
    }else if (quantidade === ''){
        alert("A quantidade do produto não pode estar em branco");
    }else if (preco === ''){
        alert("O preço do produto não pode estar em branco");
    }else cadastrarProduto(nome, codbarras,quantidade,preco,'', parseInt(quantidade));
    
}

function cadastrarProduto(produto, codig,  quantidade, valor, dtValidade){
    let novoProduto = {nome:produto, codigo:codig, quantidade:quantidade, preco:valor, datavalidade:dtValidade}
    if(typeof(Storage) !== "undefined"){
        let produtos = localStorage.getItem("produtos");
        if(produtos == null) produtos = [];
        else produtos = JSON.parse(produtos);
        localStorage.setItem("produtos", JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso" +quantidade+ "unidade de produto" + produto + "!");
        location.reload();

    }
}