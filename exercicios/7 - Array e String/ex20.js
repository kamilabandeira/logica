//Faça um algoritmo que pergunta para o usuário se ele quer criptografar ou descriptografar.  
//Utilize como criptografia a ​cifra de césar  Exemplo -> Entrada : ARBYTE SAIDA: DUEBWH 
//Caso o usuario opte por criptografar o algoritmo deve aplicar a cifra de césar e mostrar o valor criptografado 
//Caso o usuário opte por descriptografar o algoritmo deve fazer a engenharia reversa e retorna ao valor antes 
//de criptografia. 
//Utilize todo o conhecimento até aqui pra desenvolver este algoritmo 

//mapeando as bibliotecas 
const rs = require('readline-sync')


//funçoes
var criptografar = function(palavra_parametro, passo_parametro) {    //nomeando minha funçao para criptografar e recebendo o paramentro palavra_parametro
    var palavra_cript = ""                          //essa palavra vai receber letra a letra concatenando 

    for(i = 0; i < palavra_parametro.length; i++) {      //looping rodando a palavra
        //  A = 65 e Z = 90
        var letra = palavra_parametro[i].toUpperCase()   //pega a letra na posiçao i e trasforma para maiusculo
        var codigo_letra = letra.charCodeAt()            //pega o codigo da letra
    
        var novo_codigo_letra = codigo_letra + passo_parametro         //somo 3 no codigo da letra que achei para criptogrfar
    
        if(codigo_letra == 88) {      //letra x = 88
            novo_codigo_letra = 65    //letra A = 65
        }   
        if(codigo_letra == 89) {      //letra y = 89
            novo_codigo_letra = 66    //letra B = 66
        }   
        if(codigo_letra == 90) {      //letra Z = 90
            novo_codigo_letra = 67    //letra C = 67
        }   
    
        var nova_letra = String.fromCharCode(novo_codigo_letra)  //utilizo a funçao fromCharCode da classe String para trasformar o codigo em letra
        palavra_cript = palavra_cript + nova_letra               //concateno a nova letra na palavra criptografada
    }

    return palavra_cript
}

var decriptografar = function(palavra_parametro, passo_parametro) {
    var palavra_decript = ""

    for(i = 0; i < palavra_parametro.length; i++) {
        //  A = 65 e Z = 90
        var letra = palavra_parametro[i].toUpperCase()
        var codigo_letra = letra.charCodeAt()    
    
        var novo_codigo_letra = codigo_letra - passo_parametro
    
        if(codigo_letra == 65) {      //letra A = 65
            novo_codigo_letra = 88    //letra x = 88
        }   
        if(codigo_letra == 66) {      //letra B = 66
            novo_codigo_letra = 89    //letra y = 89
        }   
        if(codigo_letra == 67) {      //letra C = 67
            novo_codigo_letra = 90    //letra Z = 90
        }   
    
        var nova_letra = String.fromCharCode(novo_codigo_letra)
        palavra_decript = palavra_decript + nova_letra
    }

    return palavra_decript
}



var opcao = rs.questionInt("Digite: \n 0 - Criptografar \n 1 - Decriptografar: \n")
var palavra = rs.question("Digite uma palavra: ")

if(opcao == 0) {
    var palavra_criptografada = criptografar(palavra, 3)
    console.log("Palavra Criptografada: " + palavra_criptografada)
    // console.log("Palavra Criptografada: " + criptografar(palavra, 3))   //mesma forma para printar
} else if(opcao == 1) {
//     var palavra_decriptografada = decriptografar(palavra, 3)
//     console.log("Palavra Decriptografada: " + palavra_decriptografada)
    console.log("Palavra Decriptografada: " + decriptografar(palavra, 3))   //mesma forma para printar
} else {
    console.log("Opcao invalida. ")
}






// for(i = 0; i < lista_palavra.length; i++) {
//     var letra = lista_palavra[i].toUpperCase()

    
//     // console.log("letra " + letra)

//     if(letra == "A") {
//         nova_palavra = nova_palavra + "D"
//     }
//     if(letra == "B") {
//         nova_palavra = nova_palavra + "E"
//     }
//     if(letra == "C") {
//         nova_palavra = nova_palavra + "F"
//     }
//     if(letra == "D") {
//         nova_palavra = nova_palavra + "G"
//     }
//     if(letra == "E") {
//         nova_palavra = nova_palavra + "H"
//     }
//     if(letra == "F") {
//         nova_palavra = nova_palavra + "I"
//     }
//     if(letra == "G") {
//         nova_palavra = nova_palavra + "J"
//     }
//     if(letra == "H") {
//         nova_palavra = nova_palavra + "K"
//     }
//     if(letra == "I") {
//         nova_palavra = nova_palavra + "L"
//     }
//     if(letra == "J") {
//         nova_palavra = nova_palavra + "M"
//     }
//     if(letra == "K") {
//         nova_palavra = nova_palavra + "N"
//     }
//     if(letra == "L") {
//         nova_palavra = nova_palavra + "O"
//     }
//     if(letra == "M") {
//         nova_palavra = nova_palavra + "P"
//     }
//     if(letra == "N") {
//         nova_palavra = nova_palavra + "Q"
//     }
//     if(letra == "O") {
//         nova_palavra = nova_palavra + "R"
//     }
//     if(letra == "P") {
//         nova_palavra = nova_palavra + "S"
//     }
//     if(letra == "Q") {
//         nova_palavra = nova_palavra + "T"
//     }
//     if(letra == "R") {
//         nova_palavra = nova_palavra + "U"
//     }
//     if(letra == "S") {
//         nova_palavra = nova_palavra + "V"
//     }
//     if(letra == "T") {
//         nova_palavra = nova_palavra + "W"
//     }
//     if(letra == "U") {
//         nova_palavra = nova_palavra + "X"
//     }
//     if(letra == "V") {
//         nova_palavra = nova_palavra + "Y"
//     }
//     if(letra == "W") {
//         nova_palavra = nova_palavra + "Z"
//     }
//     if(letra == "X") {
//         nova_palavra = nova_palavra + "A"
//     }
//     if(letra == "Y") {
//         nova_palavra = nova_palavra + "B"
//     }
//     if(letra == "Z") {
//         nova_palavra = nova_palavra + "C"
//     }
// }
//  console.log("Palavra     : " + palavra)
//  console.log("Nova palavra: " + nova_palavra)







