// Executa em ordem de cima para baixo

let x = 'antigo'

console.log(x); // antigo

x = 'novo'


showText('Antes da função') // É possível utilizar uma função antes de declarar ela

function showText(y) { // Primeiro momento da função - Declaração (utilizando function)
    console.log(y)
}

showText('Depois da função') // Segundo momento que executa a função (1 ou mais vezes)

// É possível decralar uma função sem nenhum parâmetro



function soma() {
    const res = 2 + 2
    return res
}

console.log(soma()) // OBS: LEMBRAR DE CHAMAR A FUNCTION

// É possível executar uma function dentro de outra

showText(soma()) // showText vai consolar o valor do parâmetro