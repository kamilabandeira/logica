//Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essa palavra tem.  
//EX : saúde 2 consoantes 
//3 vogais


const rs = require('readline-sync')

var palavra = rs.question("Digite uma palavra: ")                 
var vogal = 0                                                
var consoante = 0
for(i = 0; i < palavra.length; i++) {                           //roda a palavra
    var letra = palavra[i].toUpperCase()                        //pega a letra na posição "i" e trasforma as letras em maiusculas (para reduzir meu if das vogais)
    var codigo_letra = letra.charCodeAt()                       //pegar o codigo da letra o o computador interpreta: ex:. A = 65 e Z = 60

    if(codigo_letra >= 65 && codigo_letra <= 90) {              //if condição para restringir apenas letras, tirando numeros e acentuações 
        if(letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {   //verificando se a letra e uma vogal
            vogal++                                                                          // se a letra e uma vogal soma o contador de vogal
        }else {
            consoante++                                                                      //se a letra for uma consoante soma o contador de consoante 
        }
    }
}

console.log("Quantidades de vogais: " + vogal)                      //printo a quantidade de vogal 
console.log("Quantidades de consoantes: " + consoante)              // printo a quantidade de consoante 

