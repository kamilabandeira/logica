// Faça um programa que pergunte ao usuário se ele quer adicionar ou apenas exibir, caso o usuário escolha adicionar, 
// altere o programa inicial de cadastro de carro para que não salve 1 objeto carro e sim uma coleção de carros
//  (utilizando arrays, em vez de serializar/deserializar o objeto será o array que possui os carros).  
// Após cadastrar o carro o programa deve novamente solicitar o usuário se quer exibir ou adicionar, 
// caso o usuário escolha exibir deve ser exibido todos os carros cadastrados.  
 
const rs = require('readline-sync')

exibir_carros = function() {
    var tamanho_lista = lista_carros.length 
    
    // for(i = 0; i < tamanho_lista; i++) {    
    //     var numero_carro = i + 1

    //     console.log(numero_carro + "o carro")
    //     console.log(lista_carros[i])
    // }

    var numero_carro = 1

    lista_carros.forEach(carro => {    //o forEach e usado para listas pois ele tem resumido as instruçoes do for i = 0, i < tamanho, i++.
        console.log(numero_carro + "o carro")
        console.log(carro)
        console.log("-----------------------------")
        numero_carro++
    })

    console.log("A quantidade total de carros eh: " + tamanho_lista) 
}

adicionar_carro = function() {
        var cor_entrada = rs.question("Digite uma cor: ")
        var modelo_entrada = rs.question("Digite uma modelo: ")
        var marca_entrada = rs.question("Digite uma marca: ")

        var carro = new Object()  

        carro.cor = cor_entrada    
        carro.modelo = modelo_entrada  
        carro.marca = marca_entrada  

        lista_carros.push(carro)   //adicionando um carro a lista de carros 

        console.log("Adicionado com sucesso. ")
}


lista_carros = []  //estou criando no inicio do loop pois se criar dentro vai ficar sobrescrevendo
// lista_carros = [carro1, carro2, carro3, carro4]

// lista_carros =  [
//                     {cor: "vermelho" , modelo: "corsa" , marca: "chevrolet" }, 
//                     {cor: "azul" , modelo: "march" , marca: "nissan" }, 
//                     {cor: "branco" , modelo: "gol" , marca: "volkswagen" }, 
//                     {cor: "preto" , modelo: "uno" , marca: "fiat" }
//                 ]
while(true) {
    digite = rs.questionInt("Digite: \n 0 - sair \n 1 - adicionar \n 2 - exibir \n ")

    if(digite == 0) {
        break
    } else if(digite == 1){
        adicionar_carro()
        
    } else if(digite == 2){
        exibir_carros()

    } else {
        console.log("Opcao invalida")
    }
}   

console.log("Fim da execucao ")