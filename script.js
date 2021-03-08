function fArea(a,b){
    return (a/100)*(b/100)
}

function limparSaida(){
    document.getElementById('resultado').innerHTML = ''
}


function limparTxtPiso(){
    document.getElementById('txtComp').value = ''
    document.getElementById('txtLarg').value = ''
    document.getElementById('txtCompPiso').value = ''
    document.getElementById('txtLargPiso').value = ''
}

function limparTxtTijolo(){
    document.getElementById('txtAlt').value = ''
    document.getElementById('txtComp').value = ''
    document.getElementById('txtAltT').value = ''
    document.getElementById('txtCompT').value = ''
    document.getElementById('txtAltP').value = ''
    document.getElementById('txtCompP').value = ''
}

function limparTxtTelha(){
    document.getElementById('txtComp').value = ''
    document.getElementById('txtLarg').value = ''
    document.getElementById('txtTelha').value = ''
}


function liberaBox(){
    let box = document.getElementById('checkBox')
    let portaJanela = document.getElementById('portaJanela')

    if(box.checked == true){
        portaJanela.style.display = 'flex'
    }else{
        portaJanela.style.display = 'none'
    }
}


function calcularPiso(){
    limparSaida()
    let comp = Number(document.getElementById('txtComp').value)
    let larg = Number(document.getElementById('txtLarg').value)
    let compPiso = Number(document.getElementById('txtCompPiso').value)
    let largPiso = Number(document.getElementById('txtLargPiso').value)
    let saida = document.getElementById('resultado')


    if(comp==''||larg==''||compPiso==''||largPiso==''){
        window.alert('Atenção - existem campos vazios!')
    }else{
        let area = comp * larg
        let aPiso = fArea(compPiso,largPiso)
        let qPiso = area / aPiso
    
    
        saida.innerHTML += `Área do ambiente: ${area} m<sup>2<sup><br>`
        saida.innerHTML += `Medida do piso: ${compPiso}cm x ${largPiso}cm<br>`
        saida.innerHTML += `<strong>Total c/ + 5% perdas: ${qPiso.toFixed(0)} pisos<s/trong>`
        limparTxtPiso()
    }  
}

function calcularTijolo(){
    limparSaida()
    let alt = Number(document.getElementById('txtAlt').value)
    let comp = Number(document.getElementById('txtComp').value)
    let altT = Number(document.getElementById('txtAltT').value)
    let compT = Number(document.getElementById('txtCompT').value)
    let saida = document.getElementById('resultado')
    let box = document.getElementById('checkBox')

    if(alt==''||comp==''||altT==''||compT==''){
        window.alert('Atenção - existem campos vazios!')
    }else {
        let area = alt * comp

        if (box.checked === true){
            let altPJ = Number(document.getElementById('txtAltP').value)
            let compPJ = Number(document.getElementById('txtCompP').value)
            let areaPJ = altPJ * compPJ 
            area -= areaPJ
        }

        let aTijolo = fArea(compT,altT)
        let qTijolo = area / aTijolo

        saida.innerHTML += `Área da parede: ${area.toFixed(2)}m<sup>2</sup><br>`
        saida.innerHTML += `Medidas do tijolo: ${altT} x ${compT}<br>`
        saida.innerHTML += `<strong>Qtd tijolos: ${qTijolo.toFixed(0)}<strong>`
        limparTxtTijolo()
    } 
}

function calcularTelha(){
    limparSaida()
    let comp = Number(document.getElementById('txtComp').value)
    let larg = Number(document.getElementById('txtLarg').value)
    let inclinacao = Number(document.getElementById('select').value)
    let rdDuasAgua = document.getElementById('duasAgua')
    let telha = Number(document.getElementById('txtTelha').value)
    let saida = document.getElementById('resultado')

    if (comp == '' || larg == '' || telha == ''){
        window.alert('Atenção - existem campos vazios!')    
    }else{
        let area = (comp*larg)*inclinacao

        if(rdDuasAgua.checked == true){
            area *= 2
        }   
        let qTelha = area * telha
        saida.innerHTML += `Área c/ correção: ${area.toFixed(2)} m<sup>2</sup><br>`
        saida.innerHTML += `<strong>Total c/ + 5% perdas: ${(qTelha*1.05).toFixed(0)} telhas</strong>`
        limparTxtTelha()
    }
}



