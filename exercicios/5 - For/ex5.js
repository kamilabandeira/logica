// Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário, usando o comando For.. 
// Perguntar ao usuário se ele deseja calcular o fatorial de outro número e repetir a execução do programa tantas
// vezes quantas o usuário indicar. Exemplo de tela de saída

const rs = require('readline-sync')


for( ; true ; ) {
    var entrada = rs.questionInt("Digite um numero para calcular o fatorial ")
    var resultado = 1 

    for(i = entrada; i > 1 ; i--){
        resultado = resultado * i 
    }

    console.log(resultado)

    var opcao = rs.questionInt("Digite: \n 0 - Sair \n 1 - Calcular outro fatorial \n ")

    if(opcao == 0) {
        break

    }else if(opcao == 1) {
        continue

    }else {
        console.log("Opçao invalida ")
    }

}

console.log("Fim da execucao ")

