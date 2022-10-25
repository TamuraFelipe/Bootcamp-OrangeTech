/*Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela baixo
média = (n1 + n2 + n3)/3;

Classificação:
- média menor que 5, reprovação;
- média entre 5 e 6.9, recuperação;
- média acima de 7, passou de semestre
*/

let arrayNotas = [0, 10, 10, 10];
let quantidadeDeNotas = arrayNotas.length;
let soma = 0;

for(let nota of arrayNotas){
    soma += nota;
}

let resultado = soma / quantidadeDeNotas;

if(resultado < 5){
    console.log(`Você foi reprovado com média ${resultado}`)
} else if(resultado >= 5 && resultado <= 6.9){
    console.log(`Você está de recuperação com média ${resultado}`)
} else {
    console.log(`Você está aprovado com média ${resultado}`);
}

