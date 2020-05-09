// Faça um programa que lê o arquivo carro.json utilizando a biblioteca e ‘fs’ para ler o arquivo
//  e após isso utilize o método JSON.parse para deserializar o objeto em string. 
//  Após isso imprima os valores lidos do json do arquivo. 
// OBS: altere o arquivo salve e rode o programa novamente e veja os dados sendo mudados a cada execução


const fs = require('file-system')  //importando a biblioteca

var conteudo = fs.readFileSync("carro.json")  //lendo o conteudo do arquivo carro.json
// console.log(conteudo)

var carro_json = JSON.parse(conteudo)   //paseando o conteudo para o formato json
console.log(carro_json)
console.log(carro_json["modelo"])
