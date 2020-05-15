const median = require("median")                                   //importando minha biblioteca median


function calcMedia(lista_numeros) {                   //primeira forma de escrever uma função, mais classica/usada
    var mediaCalculada = median(lista_numeros)  
    
    return mediaCalculada
}

function calculaMediaIdadeAluno(lista_alunos) {      //minha função recebendo a lista de aluno 
    var lista_idades = []                            //criando uma lista de idades para receber as idades dos alunos
    
    for(var i = 0; i < lista_alunos.length ; i++) {  //meu for para rodar na minha lista de alunos e pegar as idades
        var aluno = lista_alunos[i]                  

        var idade_aluno = aluno.getIdade()          //pegando a idade do aluno pelo metodo GetIdade

        lista_idades.push(idade_aluno)              //colocando a idade do aluno na lista de idade
    }

    var mediaIdadeCalculada = median(lista_idades)    //pegando a idade do aluno na lsta de idadaes, calculando aa media pela biblioteca midian e colocando na media calculada
    
    return mediaIdadeCalculada                       //retornando a media calculada
}




module.exports = {
    calcMediaApelido       : calcMedia              , 
    calculaMediaIdadeAluno : calculaMediaIdadeAluno
}













// function calcMedia(lista_numeros) {                   //primeira forma de escrever uma função, mais classica/usada
//     var mediaCalculada = median(lista_numeros)  
    
//     return mediaCalculada
// }

// var calcMedia = function(lista_numeros) {              //segunfa forma de escrever uma função, calcMedia e do tipo function e recebe o parametro lista numeros
//     var mediaCalculada = median(lista_numeros)  
    
//     return mediaCalculada
// }

// var calcMedia = (lista_numeros) => {                  //terceira forma de escrever uma função chamada rrow faunction, bastante usada
//     var mediaCalculada = median(lista_numeros)  
    
//     return mediaCalculada
// }