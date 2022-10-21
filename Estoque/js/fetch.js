
function carregarProduto(){

    try {
     var codBarras = document.getElementById('codBarras').value;
        const headers = {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
        };
        const init = {
            method: 'GET',
            headers: headers,
        };
        const response =  fetch ('http://54.94.11.167:3000/estoque/getProdutos/'+ codBarras, init);
        const jsonData =  response.json();
        atribuirCampos(jsonData);
            console.log(jsonData);
    } catch (e){
        console.log('DEU ERRO');
    }

};

function atribuirCampos(data)
{
const descricao = document.querySelector("#descricao");
const quantidade = document.querySelector("#quantidade");
const preco = document.querySelector("#preco");
const dtValidade = document.querySelector("#dtValidade");

descricao.value = data.descricao;
quantidade.value = data.quantidade;
preco.value = data.preco;
dtValidade.value = data.dtValidade;

}