// (INNER JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10 para
// cada jogador. Primeiro para o jogador A e depois para o jogador B.  Após a escolha de cada jogador o algoritmo
// deve apresentar quais foram os números iguais que o jogador A e B colocaram. 
// EX: Jogador A : 1, 2, 3, 4, 5 Jogador B : 1,2,3,8,7 Algoritmo imprime : 1,2,3  
 

var rs = require('readline-sync')

var jogador_A = rs.question("Digite o nome do 1o jogador: \n ")
var lista_A = []
for( i = 1 ; i <= 5 ; i++){
    var numero_A = rs.questionInt("Digite o " + i + "o numero para o jogador " + jogador_A + ": " )
    lista_A.push(numero_A)
}


var jogador_B = rs.question("Digite o nome do 2o jogador: \n ")
var lista_B = []
for( i = 1 ; i <= 5 ; i++){
    var numero_B = rs.questionInt("Digite o " + i + "o numero para o jogador " + jogador_B + ": " )
    lista_B.push(numero_B)
}


for(a = 0; a < lista_A.length; a++){  //for para travar a lista A
    var compara_A = lista_A[a]        //pego o numero para travar a lista A e rodar na lista B

    for(b = 0; b < lista_B.length; b++ ){  //for para rodar a lista B
        var compara_B = lista_B[b]         //rodando cada numero da lista B

        if(compara_A == compara_B){        //numero travado na lista A sendo comparado com as posiçoes da lista B
            console.log("Numero igual encontrado: " + compara_B)   
        }
    }
}

