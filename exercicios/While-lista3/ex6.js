var rs = require("readline-sync")

while(true) { //estou usando while true pois a condição de parada esta no meio do codigo.
    digitou = rs.question("Insira 0 para sair ou qualquer outra tecla para continuar. ")
    
    // if(digitou == 0) se ficar como numero, o caso 00 não atnde.
    if(digitou == "0") { //Coloquei como string para atender o caso 00.
        break //condição de parada para o while.
    }
}

console.log("Fim")

