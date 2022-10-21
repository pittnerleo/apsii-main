function executar(){
var codBarras = document.getElementById('codBarras').value;
var lista = document.getElementById('historico');
var adicionar = true;

var opt = document.createElement('option');


for (i = 0; i < lista.options.length; i ++ ){
if(codBarras== lista.options[i].value){
adicionar=false;
}
}

if(adicionar == true){
opt.value = codBarras;
lista.appendChild(opt);

}
}
