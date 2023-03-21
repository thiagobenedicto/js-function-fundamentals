function apresentar(nome) {
    return `Meu nome é ${nome}`
}

console.log(apresentar('Thiago'))

// ARROW FUNCTION

const apresentarArrow = nome => `Meu nome é ${nome}`

console.log(apresentarArrow('Ferreira'))

const funcaoComLinhas = (n1, n2) => {
    if (n1 > 10 && n2 > 10) {
        return 'Somente números de 1 a 9'
    } else {
        return n1 + n2
    }
}

console.log(funcaoComLinhas(2, 1));
