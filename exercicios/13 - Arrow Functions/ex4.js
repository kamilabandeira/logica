// Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
// Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da
// europa e depois disso aplicar a média em cima do campo Horsepower.


var fs = require("fs")
const median = require("median")     



var arquivo = fs.readFileSync("carros.json") 
var cars = JSON.parse(arquivo)  


var origemFabricacao = cars.filter(            
    (carro) => carro.Origin == "Europe"    
)

var listaPotencias = [] 
origemFabricacao.forEach(carro => {
    listaPotencias.push(carro.Horsepower) 
})


var mediaCalculada = median(listaPotencias)                                 
console.log("A media eh: " + mediaCalculada)                             



