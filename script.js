var armazena_valor = document.getElementById('tela').value;

function insert(num)
{
    armazena_valor = armazena_valor + num;
    document.getElementById('tela').value = armazena_valor ;
}

function reset()
{
    document.getElementById('tela').innerHTML = "";
}

function calcular()
{
    var resultado = armazena_valor;
    
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

/*
function apagar()
{
    var resultado = document.getElementById('tela').innerHTML;
    console.log(resultado)
    document.getElementById('tela').innerHTML = resultado.substring(0, tela.length -1);    
} */ 