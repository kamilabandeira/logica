//Faça um algoritmo que solicite ao usuário A ou B  Caso o usuário escolha A  O algoritmo deve imprimir toda 
//informação do carro com maior aceleração Caso o usuário escolha B O algoritmo deve imprimir toda informação do 
//carro com maior potência 
//Se houver mais de um carro imprimir todos 1 por 1.  
 

const fs = require("fs")
const rs = require("readline-sync")

function GetSortOrder(prop) {               //função GetSortOrder(função escrita) que ordenada a lista em ordem crescente ex: 1,3,7
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}   

var opcao = rs.question("Escolha a opcao A ou a opcao B: ")
opcao = opcao.toUpperCase()

var arquivo = fs.readFileSync("carros.json") 
var cars = JSON.parse(arquivo)  
 
if(opcao == "A"){
    var carrosOrdenadosPorAceleracao = cars.sort(GetSortOrder("Acceleration"))
    var maiorAceleracao = carrosOrdenadosPorAceleracao.length - 1
    console.log(carrosOrdenadosPorAceleracao[maiorAceleracao])

}else if(opcao == "B"){
    var carrosOrdenadosPorPotencia = cars.sort(GetSortOrder("Horsepower"))
    var maiorPotencia = carrosOrdenadosPorPotencia.length - 1
    console.log(carrosOrdenadosPorPotencia[maiorPotencia])

}else{
    console.log("Opcao invalida")
}