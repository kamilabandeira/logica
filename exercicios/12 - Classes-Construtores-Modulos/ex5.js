//Pegue o objeto carro da atividade 1 e exporte ele como um objeto módulo  Exemplo slide PPT : 
//Para isso crie um arquivo chamado carro.js e adicione a classe criada na atividade 1 neste arquivo. 
//Adapte a atividade 1 para usar a referencia por módulo da classe Carro. 

const rs = require('readline-sync');
const carro = require("../12 - Classes-Construtores-Modulos/carro")  //estou importando todos os atributos e funçoes e metodos do meu modulo carro
                                                                    //o nome do objeto e carro com "c" minusculo pois ele não representa apenas a classe Carro, mas sim todos  os atributos e funçoes e metodos do meu modulo carro

var marca1 = rs.question('Marca 1: ');
var modelo1 = rs.question('Modelo 1: ');
var cor1 = rs.question('Cor 1: ');
var carro1 = new carro.Carro(marca1, modelo1, cor1);   //estou usando o objeto carro para acessar o construtor da minha classe Carro

var marca2 = rs.question('Marca 2: ');
var modelo2 = rs.question('Modelo 2: ');
var cor2 = rs.question ('Cor 2: ');
var carro2 = new carro.Carro(marca2, modelo2, cor2);   //estou usando o objeto carro para acessar o construtor da minha classe Carro


if ( carro.saoIguais(carro1, carro2) ){       //estou usando o objeto carro para acessar a função saoIguais 
    console.log('São iguais');
}else {
    console.log('Não aão iguais');   
}
