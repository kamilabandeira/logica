//Faça um algoritmo que receba uma palavra, após isso ele remove todas as vogais dessa palavra e imprime a 
//palavra novamente porém sem as vogais. EX: Entrada banana O algoritmo imprime :  Bnn Utilize o método ​split()​
// para quebrar a string e depois montar ela sem vogais. 



const rs = require('readline-sync')

var palavra = rs.question("Digite uma palavra: ")

var lista_palavra = palavra.split("")         //usando o split para quebrar a string por letra
console.log(lista_palavra)                    //printei so para enxergar o resultado do split
var resposta = ""

var vogais = ["A" , "E" , "I" , "O" , "U"]    //lista de vogais para poder usar o indexOf
 

for(i = 0; i < lista_palavra.length; i++){        //for para andar na lista
    var letra = lista_palavra[i].toUpperCase()     //usei toUpperCase para ficar mais facil a comparação das vogais
    
    // if(letra != "A" && letra != "E" && letra != "I" && letra != "O" && letra != "U") {
    if( vogais.indexOf(letra) == -1 ) {              //usei indexOf para ver se a letra esta dentro da lista de vogais, se não encontrar retorna -1
        resposta = resposta + letra.toLowerCase()   //usei o toLowerCase para trasformar em minusculo
    }     
}


console.log(resposta)