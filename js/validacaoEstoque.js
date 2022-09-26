    const form = document.getElementById('form')
    const NomeProduto = document.getElementById('NomeProduto')
    const CodBarras = document.getElementById('CodBarras')
    const Quantidade = document.getElementById('Quantidade')
    const Valor = document.getElementById('Valor')
    const DtValidade= document.getElementById('DtValidade')


    form.addEventListener('submit', (e) => {
        e.preventDefault()

        checkInputs()
    
    })

  function checkInputs(){
    const NomeProdutoValue = NomeProduto.value.trim()
    const CodBarrasValue = CodBarras.value.trim()
    const QuantidadeValue = Quantidade.value.trim()
    const ValorValue = Valor.value.trim()
    const DtValidadeValue = DtValidade.value.trim()
  
        
    if(NomeProdutoValue === ''){
        errorValidation(NomeProduto)
    }else{
        successValidation(NomeProduto)
    }
    if(CodBarrasValue === ''){
        errorValidation(CodBarras)
    }else{
        successValidation(CodBarras)
    }
    if(QuantidadeValue === ''){
        errorValidation(Quantidade)
    }else{
        successValidation(Quantidade)
    }
    if(ValorValue === ''){
        errorValidation(Valor)
    }else{
        successValidation(Valor)
    }
    if(DtValidadeValue === ''){
        errorValidation(DtValidade)
    }else{
        successValidation(DtValidade)
    }
  }

  function errorValidation(input){
    const check = input.parentElement;
    const small = check.querySelector('small')
    if(check.className.includes('check success')){
        check.className= check.className.replace('check success' , '')
       }
    if (check.className.includes('check error')){

    }else{
        check.className  = check.className + ' check error'
    }
  }
 
  function successValidation(input){
    const check = input.parentElement;
    if(check.className.includes('check error')){
      check.className= check.className.replace('check error' , '')
     }
    if (check.className.includes('check success')){

    }else{
        check.className = check.className + ' check success'
    }
    
  }