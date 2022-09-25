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
        errorValidation(NomeProduto, 'Preencha esse campo')
    }else{
        successValidation(NomeProduto)
    }
    if(CodBarrasValue === ''){
        errorValidation(CodBarras, 'Preencha esse campo')
    }else{
        successValidation(CodBarras)
    }
    if(QuantidadeValue === ''){
        errorValidation(Quantidade, 'Preencha esse campo')
    }else{
        successValidation(Quantidade)
    }
    if(ValorValue === ''){
        errorValidation(Valor, 'Preencha esse campo')
    }else{
        successValidation(Valor)
    }
    if(DtValidadeValue === ''){
        errorValidation(DtValidade, 'Preencha esse campo')
    }else{
        successValidation(DtValidade)
    }
  }

  function errorValidation(input, message){
    const check = input.parentElement;
    const small = check.querySelector('small')
    
    small.innerText = message
    check.className = 'check error'
  }

  function successValidation(input){
    const check = input.parentElement;
    check.className = 'check success'
  }