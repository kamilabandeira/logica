//Peça  ao usuário para digitar dez valores numéricos e ordene por ordem crescente esses valores, 
//guardando-os num vetor e depois exibindo para o usuário.Para esta atividade tente usar o algoritmo 
//Bubble Sort (Método da bolha), pesquise sobre ele na internet.  

const rs = require('readline-sync')


var vetor_entrada = []
for(i = 0; i < 10; i++){
    var ordem_entrada = i + 1
    entrada = rs.questionInt("Digite o " + ordem_entrada + "o numero: ")  //entrando com os numeros

    vetor_entrada.push(entrada)                                           //colocando o valor na lista
}

console.log("Antes \n" + vetor_entrada)                                  //printando os numeros de entrada 


for(ultimo = vetor_entrada.length-1; ultimo > 0; ultimo--){              //for para quando o maior numero da rodada ser encontrado, ele ser classificado e não mais verificado, economizando tempo e dinheiro do algoritmo 
    for(i = 0; i < ultimo; i++){                                        //encontra o maior numero e classifica ele
        primeiro = vetor_entrada[i]                                     //pega o valor do vetor na primeira posição
        segundo  = vetor_entrada[i+1]                                   //pega o valor do vetor na segunda posição 

        if(primeiro > segundo){                                        //compara se o valor do vetor da primeira posição e maior do que o valor do vetor da segunda posição 
            vetor_entrada[i]   = segundo                               //coloca o segundo valor na primeira posição  
            vetor_entrada[i+1] = primeiro                              //coloca o primeiro valor na segunda posição
        }
    }
}


console.log("Depois \n" + vetor_entrada)








