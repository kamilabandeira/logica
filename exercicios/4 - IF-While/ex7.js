//Escreva um programa que apresente quatro opções:  (a) consulta saldo, (b) saque e (c) depósito e (d) sair.  
//O saldo deve iniciar em R$ 0,00.  A cada saque ou depósito o valor do saldo deve ser atualizado. Exemplo:
//Caso o usuário tente sacar mais do que possui em conta, trazer uma mensagem de erro e retornar à tela de opções 

const rs=require('readline-sync')


var saldo = 0

while(true){
    var opcoes = rs.question("\n Ecolha uma opcao: \n A - consultar saldo \n B - saque \n C - deposito \n D - sair \n ")
    opcoes = opcoes.toUpperCase()


    if(opcoes == "A") {
        console.log("\n O saldo eh R$" + saldo.toFixed(2))

    }else if(opcoes == "B"){

        var saque = rs.questionFloat("\n Digite o valor que voce quer sacar \n")
        if(saldo >= saque){
            saldo = saldo - saque
        }else {
            console.log("\n Saldo insuficiente ")
        }

    }else if(opcoes == "C") {
        var deposito = rs.questionFloat("\n Digite o valor de deposito \n")
        saldo = saldo + deposito

    }else if(opcoes == "D"){
        break

    }else {
        console.log("\n Opcao invalida ")

    }
}