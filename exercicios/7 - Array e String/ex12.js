//Faça um programa que receba uma palavra e diga se existe vogais ou não.  Utilize o método ​indexOf() 


const rs = require('readline-sync')

var palavra = rs.question("Digite uma palavra: ")
  
if( palavra.indexOf( "A" )  != -1 ||              //verificando se existe vogal com o indexOf
    palavra.indexOf( "E" )  != -1 ||              //não precisei mudar para maiusculo ou minusculo pois a função
    palavra.indexOf( "I" )  != -1 ||              //indexOf ja faz isso
    palavra.indexOf( "O" )  != -1 || 
    palavra.indexOf( "U")
){
    console.log("Existe vogal ")                  //se existe ele printa 
}else {  
    console.log("Nao existe vogal ")             //se não existir printa não existente 
}

