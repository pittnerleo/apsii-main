function executar(){
    var text = document.getElementById('text').value;
    var lista = document.getElementById('historico');
    var adicionar = true;
    
    var opt = document.createElement('option');


    for (i = 0; i < lista.options.length; i ++ ){
        if(texto == lista.options[i].value){
            adicionar=false;
        }
    }

    if(adicionar == true){
        opt.value = text;
        lista.appendChild(opt);
    }
}