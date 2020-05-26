//Escreva um programa que simule uma partida de pedra papel e tesoura.  Deve ser solicitado o nome do jogador A 
//e do jogador B. Após isso o programa deve pedir a jogada do jogador A e a jogada do jogador B. No final o programa 
//deve imprimir quem ganhou. Dicas:  Papel ganha de pedra Tesoura ganha de papel Pedra ganha de tesoura 
//Para não exibir a jogada do jogador utilize o comando de “password” no readline-sync 

const rs=require('readline-sync')


function validaJogada(jogadaA_param , jogadaB_param) {
    if( (jogadaA_param == "PEDRA" || jogadaA_param == "PAPEL" || jogadaA_param == "TESOURA") &&       //tratamento para que as jogadas ex: caso digite algum nome errado não roda

        (jogadaB_param == "PEDRA" || jogadaB_param == "PAPEL" || jogadaB_param == "TESOURA")
      ) {
        return true
    }
    
    return false
}

function jokenPo(jogadaA_param , jogadaB_param) {

    if(jogadaA_param == jogadaB_param) {
        console.log("\n Jogada igual. Jogue novamente ")

    } else if(jogadaA_param == "PAPEL" && jogadaB_param == "PEDRA") {
        console.log("\n Jogador " + nomeA + " ganhou ")

    } else if(jogadaA_param == "PEDRA" && jogadaB_param == "TESOURA") {
        console.log("\n Jogador " + nomeA + " ganhou ")

    } else if(jogadaA_param == "TESOURA" && jogadaB_param == "PAPEL") {
        console.log("\n Jogador " + nomeA + " ganhou ")
    }else {
        console.log("\n Jogador " + nomeB + " ganhou ")
    }

}




var nomeA = rs.question("Digite o nome do jogador A: ")
var nomeB = rs.question("Digite o nome do jogador B: ")


while(true) {
    var jogadaA = rs.question("\n Digite a jogada de " + nomeA + ": " , {hideEchoBack: true})  //hideEchoBack: true opção para aesconder a opcao do jogador
    jogadaA = jogadaA.toUpperCase()

    var jogadaB = rs.question("\n Digite a jogada de " + nomeB + ": " , {hideEchoBack: true})
    jogadaB = jogadaB.toUpperCase()

    if( validaJogada(jogadaA , jogadaB) ) {
        jokenPo(jogadaA , jogadaB)
        
    }else {
        console.log("\n Jogada invalida ")
    }
}
