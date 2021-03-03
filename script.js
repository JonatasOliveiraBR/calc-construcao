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
        let aPiso = area(compPiso,largPiso)
        let qPiso = area / aPiso
    
    
        saida.innerHTML += `Área do ambiente: ${area} m<sup>2<sup><br>`
        saida.innerHTML += `Medida do piso: ${compPiso}cm x ${largPiso}cm<br>`
        saida.innerHTML += `<strong>Qtd: ${qPiso.toFixed(0)} pisos<s/trong>`

        saida.innerHTML += `<h3>Margem + 10%: ${(qPiso*0.1)+qPiso} pisos<h3>`

        limparTxt()
    }  
}

function calcularTijolo(){
    limparSaida()
    let alt = Number(document.getElementById('txtAlt').value)
    let comp = Number(document.getElementById('txtComp').value)
    let altT = Number(document.getElementById('txtAltT').value)
    let compT = Number(document.getElementById('txtCompT').value)
    let saida = document.getElementById('resultado')

    if(alt==''||comp==''||altT==''||compT==''){
        window.alert('Atenção - existem campos vazios!')
    }else {
        let area = alt * comp
        let aTijolo = fArea(compT,altT)
        let qTijolo = area / aTijolo

        
        saida.innerHTML += `Área do muro: ${area}m<sup>2</sup><br>`
        saida.innerHTML += `Medidas do tijolo: ${altT} x ${compT}<br>`
        saida.innerHTML += `<strong>Qtd tijolos: ${qTijolo.toFixed(0)}<strong>`

        limparTxtTijolo()
    }  
    
    


    

   

    


}

function liberaBox(){
    let box = document.getElementById('checkBox')
    let portaJanela = document.getElementById('portaJanela')
    let altPJ = Number(document.getElementById('txtAltP').value)
    let compPJ = Number(document.getElementById('txtCompP').value)

    if(box.checked == true){
        portaJanela.style.display = 'block'
    }else{
        portaJanela.style.display = 'none'
    }
}

    /*
    let altPJ = Number(document.getElementById('txtAltP').value)
    let compPJ = Number(document.getElementById('txtCompP').value)
    let areaPJ = altPJ * compPJ 
    alert(areaPJ)
    */

