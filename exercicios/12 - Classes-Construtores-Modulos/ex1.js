/*
Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
Para isso :
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
inicialize as propriedades com estes valores.
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
cor.
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
e cor.
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.*/

class Carro {
	constructor(marca, modelo, cor) {
		this.marca = marca;
		this.modelo = modelo;
		this.cor = cor;
	}
}

var rs = require('readline-sync');

var marca1 = rs.question('Marca 1: ');
var modelo1 = rs.question('Modelo 1: ');
var cor1 = rs.question('Cor 1: ');
var carro1 = new Carro(marca1, modelo1, cor1);
// console.log(carro1);

var marca2 = rs.question('Marca 2: ');
var modelo2 = rs.question('Modelo 2: ');
var cor2 = rs.question ('Cor 2: ');
var carro2 = new Carro(marca2, modelo2, cor2);
// console.log(carro2);

var carros = [carro1, carro2];

function saoIguais(c1, c2) {
    // var mesmoModelo = c1.modelo == c2.modelo;
    if(c1.modelo == c2.modelo) {
        var mesmoModelo = true
    } else {
        var mesmoModelo = false
    }

    // var mesmaMarca = c1.marca == c2.marca;
    if(c1.marca == c2.marca) {
        var mesmaMarca = true
    } else {
        var mesmaMarca = false
    }



    // return mesmaMarca && mesmoModelo    
    if(mesmaMarca && mesmoModelo) {
        return true
    } else {
        return false
    }
}



if ( saoIguais(carro1, carro2) ){
    console.log('São iguais:');
}else {
    console.log('Não aão iguais:');   
}

