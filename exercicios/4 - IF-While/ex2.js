// Escreva um programa que passe por todos os números de 1 a 50 e
// para cada um deles imprima na tela se o número é par ou ímpar. Caso o número
// também seja primo, o programa deve dizer que ele é primo. (um número primo é um
// número que só é divisível por ele mesmo e por 1). Dica: Neste exercício você pode
// precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de
// um loop.
// EX.:
// 1 ÍMPAR PRIMO
// 2 PAR PRIMO
// 3 ÍMPAR PRIMO
// 4 PAR
// 5 ÍMPAR PRIMO
// 6 PAR
// 7 ÍMPAR PRIMO
// 8 PAR
// 9 ÍMPAR
// 10 PAR


var n1 = 1
var n2 = 50

while (n1 <= n2) {
    //para um numero ser primo a divisão tem que ser exata ex: 7 => [2,3,4,5,6]
    //7%2  3, 1
    //7%3  2, 1
    //7%4  1, 3
    //7%6  1, 1

    var ehPrimo = true
    var divisor = 2
    while (divisor < n1) {
        if (n1 % divisor == 0) {
            //nao e primo
            ehPrimo = false
        }

        divisor++
    }
    
    
    if(n1 % 2 == 0) {

        if(ehPrimo) {
            console.log(n1 + " eh par e primo ")
        } else {
            console.log(n1 + " eh par ")
        }

    } else {

        if(ehPrimo) {
            console.log(n1 + " eh impar e primo ")
        } else {
            console.log(n1 + " eh impar ")
        }

    }
   
    n1++
}