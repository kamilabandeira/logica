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

