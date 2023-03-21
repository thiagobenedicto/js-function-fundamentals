// Exemplo não utilizando parâmetros

function soma(n1, n2) {
    return n1 + n2
}

console.log(soma());


// Exemplo utilizando parâmetros

function multiplica(n1, n2) {
    return n1 * n2
}

console.log(multiplica(2, 3));

// Ordem dos parâmetros

console.log(nomeIdade('Thiago', 24)); // Atenção em utilizar os parâmetros na ordem certa

function nomeIdade(nome, idade) {
    return nome + idade
}

// Utilizando a função soma dentro da multiplica

console.log(multiplica(soma(5, 5), soma(1, 1)));


// Quando não informamos os parâmetros, podemos deixar um valor padrão de cada parâmetro na declaração

function divide(n1 = 1, n2 = 1) {
    return n1 / n2
}

console.log(divide());

// Exemplo de função utilizada em uma template string:

function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”