/*O IMC - Indice de Massa Corporal é um critério da OMS pra dar uma indicação sobre a condição de peso de uma pessoa adulta

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
1 - Abaixo de 18.5 - Abaixo do peso;
2 - Entre 18.5 e 25 - Peso normal;
3 - Entre 25 e 30 Acima do peso;
4 - Entre 30 e 40 Obeso;
5 - Acima de 40 Obsidade Grave;
*/

const peso = 70;
const altura = 1.75;


class calculoIMC {
    peso;
    altura;
    
    imc(peso, altura){
        this.resultado((peso / (altura * altura)).toFixed(2));
    }
    resultado(imc){
        if (imc < 18.5){
            console.log(`IMC: ${imc} - Abaixo do peso`);
        } else if (imc >= 18.5 || imc <=25){
            console.log(`IMC: ${imc} - Peso normal`);
        } else if (imc > 25 || imc <= 30){
            console.log(`IMC: ${imc} - Acima do peso`);
        } else if (imc > 30 || imc <= 40){
            console.log(`IMC: ${imc} - Obeso`);
        } else {
            console.log(`IMC: ${imc} - Obsidade grave`);
       }
    }
}
const pessoa1 = new calculoIMC();
pessoa1.imc(peso, altura)


