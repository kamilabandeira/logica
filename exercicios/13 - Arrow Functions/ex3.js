// Crie um algoritmo que conte quantos carros da Ford existem no cars.json. 
// A resolução é similar ao exercício 1, porém utilize o método “includes” com parâmetros “Ford” na propriedade Car 
// para realizar a contagem. 
 

var fs = require("fs")
const rs = require("readline-sync")


// var quantidadeCarrosFord = rs.question("Digite a quantidade ")

var arquivo = fs.readFileSync("carros.json") 
var cars = JSON.parse(arquivo)  

var fabricacao = cars.filter(
     (carros) => carros.Car.includes('Ford'))    


console.log(fabricacao)
console.log(" total encontrada: " + fabricacao.length)


// var fs = require('fs')
// var carrosSerializados = fs.readFileSync('E:\\projetos\\arbyte\\logica\\LISTAS\\DATA\\cars.json')
// var carros = JSON.parse(carrosSerializados)
// var fabricacao = carros.filter( (carros) => carros.Car.includes('Ford'))
// console.log(fabricacao)
// console.log('Quantidade total encontrada: ', fabricacao.length)