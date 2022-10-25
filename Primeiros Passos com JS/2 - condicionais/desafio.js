/*Faça um programa para calcular o valor de uma viagem
Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro.
4 - gasto médio de combustível do carro por km;
5 - Distância em km da viagem;

Imprimir no console o valor que será gasto para realizar esta viagem
*/

const tipoDeCombustivel = "Gasolina";

const precoEtanol = 2.9;
const precoGasolina = 3.99;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const gastoGasolina = (distanciaEmKm / kmPorLitros) * precoGasolina;
const gastoEtanol = (distanciaEmKm / kmPorLitros) * precoEtanol;

if (tipoDeCombustivel === "Gasolina") {
  console.log(`Gasto com gasolina será R$${gastoGasolina.toFixed(2)}`);
} else if (tipoDeCombustivel === "Etanol") {
  console.log(`Gasto com etanol será R$${gastoEtanol.toFixed(2)}`);
} else {
  console.log("Tipo de combustível inválido!");
}
