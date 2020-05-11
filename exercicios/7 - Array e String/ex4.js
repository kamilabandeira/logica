//(RIGHT JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10 para cada 
//jogador. Primeiro para o jogador A e depois para o jogador B.  Após a escolha de cada jogador o algoritmo deve 
//apresentar quais foram os números que apenas o jogador B colocou diferente do A. EX: Jogador A : 1, 2, 3, 4, 5 
//Jogador B : 1,2,3,8,7 Algoritmo imprime : 8,7 
 

var rs = require('readline-sync')

var jogador_A = rs.question("Digite o nome do 1o jogador: \n ")
var lista_A = []
for( i = 1 ; i <= 5 ; i++){1
    var numero_A = rs.questionInt("Digite o " + i + "o numero para o jogador " + jogador_A + ": " )
    lista_A.push(numero_A)
}


var jogador_B = rs.question("Digite o nome do 2o jogador: \n ")
var lista_B = []
for( i = 1 ; i <= 5 ; i++){
    var numero_B = rs.questionInt("Digite o " + i + "o numero para o jogador " + jogador_B + ": " )
    lista_B.push(numero_B)
}


for(b = 0; b < lista_B.length; b++) {            //for para travar a lista B
    var compara_B = lista_B[b]                   //pego o numero travado da lista B para rodar na lista A 

    var diferente = 0
        for(a = 0; a < lista_A.length; a++) {    //for para rodar na lista A
            var compara_A = lista_A[a]           //rada cada numero da lista A

            if(compara_B == compara_A) {         //verificação para enconomizar processamento, sempre que acha um numero igual sai
                break
            }else{
                diferente++                      //soma mais 1
            }
        }

    if(diferente == 5)                           //se o valor for igual ao da lista A e pq nenhum numero da lista A e igual a lista B 
    {
        console.log("Numero diferente encontrado: " + compara_B)
    }
}
