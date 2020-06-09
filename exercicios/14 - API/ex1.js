// Solicite ao usuário para inserir yes ou no
// Após isso utilize a API https://yesno.wtf/api
// Esta api traz um dado aleatório yes ou no
// No final imprima se o usuário acertou ou não



const axios = require("axios")
const rs = require("readline-sync")

var entrada = rs.question("Digite yes ou no: ")



axios.get('https://yesno.wtf/api').then(function(response) {
    var respostaApi = response.data.answer

    if(entrada.toLowerCase() == respostaApi) {
        console.log("Você acertou! ")
    } else {
        console.log("Você errou. ")
    }
    
}).catch(function(error) {
    console.log("O erro eh : " + error)
})


