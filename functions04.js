// Normalmente utilizamos este padrão para declarar uma função

function nomeFunc(param) {
    //bloco de código
}

nomeFunc('param')

// Expressão de função

const soma = function(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 2));

// Principal diferença é que utilizando a maneira padrão, podemos executar em qualquer ordem

console.log(apresentar())

function apresentar() {
    return 'Olá'
}

console.log(apresentar1()); // ERRO
const apresentar1 = function() {
    return 'Olá'
}