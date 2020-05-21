//Escreva um programa que simule uma partida de pedra papel e tesoura.  Deve ser solicitado o nome do jogador A 
//e do jogador B. Após isso o programa deve pedir a jogada do jogador A e a jogada do jogador B. No final o programa 
//deve imprimir quem ganhou. Dicas:  Papel ganha de pedra Tesoura ganha de papel Pedra ganha de tesoura 
//Para não exibir a jogada do jogador utilize o comando de “password” no readline-sync 

const rs=require('readline-sync')

var nomeA = rs.question("Digite o nome do jogador A: ")
var nomeB = rs.question("Digite o nome do jogador B: ")


while(true) {
    var jogadaA = rs.question("\n Digite a jogada de " + nomeA + ": " , {hideEchoBack: true})
    jogadaA = jogadaA.toUpperCase()

    var jogadaB = rs.question("\n Digite a jogada de " + nomeB + ": " , {hideEchoBack: true})
    jogadaB = jogadaB.toUpperCase()

    if( (jogadaA == "PEDRA" || jogadaA == "PAPEL" || jogadaA == "TESOURA") && 

        (jogadaB == "PEDRA" || jogadaB == "PAPEL" || jogadaB == "TESOURA")
      ) {

        if(jogadaA == jogadaB) {
            console.log("\n Jogada igual. Jogue novamente ")

        } else if(jogadaA == "PAPEL" && jogadaB == "PEDRA") {
            console.log("\n Jogador " + nomeA + " ganhou ")

        } else if(jogadaA == "PEDRA" && jogadaB == "TESOURA") {
            console.log("\n Jogador " + nomeA + " ganhou ")

        } else if(jogadaA == "TESOURA" && jogadaB == "PAPEL") {
            console.log("\n Jogador " + nomeA + " ganhou ")
        }else {
            console.log("\n Jogador " + nomeB + " ganhou ")
        }
    }else {
        console.log("\n Jogada invalida ")
    }
}
