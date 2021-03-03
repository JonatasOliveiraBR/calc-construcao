function areaPiso(a,b){
    return (a/100)*(b/100)
}

function limparSaida(){
    document.getElementById('resultado').innerHTML = ''
}

function limparTxt(){
    document.getElementById('txtComp').value = ''
    document.getElementById('txtLarg').value = ''
    document.getElementById('txtCompPiso').value = ''
    document.getElementById('txtLargPiso').value = ''
}

function calcular(){
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
        let piso = areaPiso(compPiso,largPiso)
        let qPiso = area / piso
    
    
        saida.innerHTML += `Área do ambiente: ${area} m<sup>2<sup><br>`
        saida.innerHTML += `Medida do piso: ${compPiso}cm x ${largPiso}cm<br>`
        saida.innerHTML += `<h3>Qtd: ${qPiso.toFixed(0)} pisos</h3>`

        saida.innerHTML += `<h3>Margem + 10%: ${(qPiso*0.1)+qPiso} pisos<h3>`

        limparTxt()
    }



    

    
}

