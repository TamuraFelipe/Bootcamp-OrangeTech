const numero = 12;
const eNumeroPar = (numero % 2) === 0;

if(numero === 0){
    console.log("O número é inválido!")
} else if(eNumeroPar === 0){
    console.log("Número é par!")
} else {
    console.log("Número é ímpar!")
}

console.log(eNumeroPar)