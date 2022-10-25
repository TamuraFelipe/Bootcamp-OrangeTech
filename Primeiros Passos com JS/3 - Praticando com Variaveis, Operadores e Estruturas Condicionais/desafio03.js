/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado

Código condição de pagamento
- à vista débito, recebe 10% de desconto;
- à vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/


class formaPagamento{
    
    constructor(productPrice, qtdVezes){
        this.productPrice = productPrice;
        this.qtdVezes = qtdVezes;
    }

    debito(productPrice){
        console.log(`Valor à vista no Débito: R$${(productPrice - (productPrice * (10 / 100))).toFixed(2)}`); 
    }
    dinheiroOuPix(productPrice) {
        console.log(`Valor à vista Dinheiro/PIX: R$${(productPrice - (productPrice * (15 / 100))).toFixed(2)}`); 
    }
    emDuasVezes(productPrice) {
        console.log(`Pagamento em 2 x R$${(productPrice / 2).toFixed(2)} - Total: R$${(2 * productPrice).toFixed(2)}`);
    }
    variasVezes(productPrice, qtdVezes) {
        //console.log((productPrice + (productPrice * (10 / 100)))  / qtdVezes);
        console.log(`Pagamento em ${qtdVezes} x R$${((productPrice + (productPrice * (10 / 100))) / qtdVezes).toFixed(2)} - Total: R$${((productPrice + (productPrice * (10 / 100)))).toFixed(2)}`);
    }
    
    forma(tipo){
        switch(tipo){
            case "Debito":
                this.debito(this.productPrice);
                break;
            case "Dinheiro":
                this.dinheiroOuPix(this.productPrice);
                break;
            case "PIX":
                this.dinheiroOuPix(this.productPrice);
                break;
            case "2X":
                this.emDuasVezes(this.productPrice);
                break;
            case "Varias":
                this.variasVezes(this.productPrice, this.qtdVezes);
                break;
            default:
                console.log("Forma de pagamento inválida!")

        }
    }
}

const produto1 = new formaPagamento(100, 5);
produto1.forma("Varias")

