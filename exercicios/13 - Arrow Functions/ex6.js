//Faça um algoritmo que diga qual é o carro menos potente da lista cars.json.  Utilize o campo Horsepower para 
//descobrir qual é o menos potente 


const fs = require("fs")

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

var arquivo = fs.readFileSync("carros.json") 
var cars = JSON.parse(arquivo)  

var carrosOrdenados = cars.sort(GetSortOrder("Horsepower"))

console.log(carrosOrdenados[0]) 