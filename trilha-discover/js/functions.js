// Criação de um app para frases

// Declaração da Função - declaration - function statement
function createFrases () {
    console.log("Frase 01");
    console.log("Frase 02");
};

createFrases();

// Function expression
// Function anonymous
// Parametros
const sum01 = function(number1, number2){
    console.log(number1 + number2);
};
sum01(10, 20);
sum01(2, 3);

function soma(number1, number2){
    soma = number1 + number2;
    return soma;
};

let numero01 = 25;
let numero02 = 39;

console.log(`O primeiro valor é ${numero01}`);
console.log(`O segundo valor é ${numero02}`);
console.log(`O valor da soma é ${soma(numero01, numero02)}`);
console.log("Fim do Programa!");
