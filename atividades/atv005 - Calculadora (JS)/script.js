function inserirNumero(value) {
    let valor = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = valor + value;

}

function inserirSinal(value){
    let sinal = document.getElementById('res').innerHTML;
    if (sinal === "" && sinal !== ".") return;
    document.getElementById('res').innerHTML = sinal + value;
}


function limpar(){
    document.getElementById('res').innerHTML = "";
}

function backCE(){
    let resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    let resultado = document.getElementById('res').innerHTML;

    document.getElementById('res').innerHTML = eval(resultado); 
}