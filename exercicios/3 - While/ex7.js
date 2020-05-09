// Faça um programa que pergunte ao usuário escolher duas opções A e B.
// A encerra o programa, B é pra fazer uma soma.
// a. Se o usuário inserir A o programa fecha
// b. Se o usuário inserir B o programa vai realizar uma operação de soma,
// solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o
// segundo número o algoritmo deve apresentar a soma e também pergunta se
// quer realizar outro cálculo.
// c. Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer
// que não entendeu o comando e solicitar novamente para inserir A ou B


const rs = require("readline-sync")

while(true) {
    digitou = rs.question("Insira A para sair e B para continuar: ")

    if(digitou == "a" || digitou == "A") {
        break
    } else if(digitou == "b" || digitou == "B"){
        while(true){
            n1 = rs.questionInt ("Digite o primeiro numero: ")
            n2 = rs.questionInt ("Digite o segundo numero: ")
            soma = n1 + n2
            console.log("O resultado da soma eh: " + soma)
            
            opcao_soma = rs.questionInt("Deseja realizar outro calculo?\n 1-sim\n 0-nao ")
        
            if(opcao_soma == 0) {
                break
            } else if(opcao_soma == 1){
                continue 
            } else {
                console.log("Opcao invalida. ")
            }            
        }
    } else {
        console.log("Opcao invalida. ")
    }
}

