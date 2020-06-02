// Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base cars.json 
// O campo que define o país no cars.json é Origin A comparação da string pode ser utilizada usando a palavra “Japan” 
// A resolução é similar ao exercício 1

var fs = require("fs")
const rs = require("readline-sync")



var entrada = rs.question("Digite uma origem: ")

var arquivo = fs.readFileSync("carros.json") 
var cars = JSON.parse(arquivo)  

var origemFabricacao = cars.filter(            
    (carro) => carro.Origin == "Japan"    
)
// console.log(origemFabricacao)
console.log(" Quantidade total encontrada: " + origemFabricacao.length)

