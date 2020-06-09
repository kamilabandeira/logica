// (OBRIGATORIO)Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
// também seu autor
// Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes


const axios = require("axios")
const rs = require("readline-sync")

axios.get("https://breaking-bad-quotes.herokuapp.com/v1/quotes").then(function(response) {  
    var frase = response.data[0].quote
    var nomeAutor = response.data[0].author

    console.log(`\n O Autor eh: ${nomeAutor} \n A fase eh: ${frase} `)

}).catch(function(error) {
    console.log("Resposta errada : " + error)
})