/*Faça um programa para calcular o valor gasto de combustível em uma viagem
- Você terá 3 variáveis.
- Preço do combustível
- Valor médio de gasto do carro
- Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem
*/

const gasPrice = 5.79;
const kmPerLiters = 15; //10km por litros
const kmDistance = 1290;

const litersConsumed = kmDistance / kmPerLiters;
const totalSpend = litersConsumed * gasPrice;

console.log(`Valor da viagem: R$${totalSpend.toFixed(2)}`);