
class Carro {
	constructor(marca, modelo, cor) {
		this.marca = marca;
		this.modelo = modelo;
		this.cor = cor;
    }

    getCor() {
        return this.cor
    }
}


function saoIguais(c1, c2) {           //a função saoIguais não foi criada como um metodo dentro da classe Carro pq ela esta mexendo com mais de um objeto ao mesmo tempo
                                       //como os metodos dentro da classe precisam utilizar o THIS. para acessar os atributos, seria muito complicado colocar THIS.c1.cor e THIS.C2.cor dentro do metodo
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

    if(c1.getCor() == c2.getCor()) {
        var mesmaCor = true
    } else {
        var mesmaCor = false
    }



    // return mesmaMarca && mesmoModelo    
    if(mesmaMarca && mesmoModelo && mesmaCor) {
        return true
    } else {
        return false
    }
}



module.exports = {              //estou exportando o TODO o conteudo do meu modulo
    Carro       : Carro     ,   //estou exportando o cosntrutor da minha classe Carro para poder criar um objeto do tipo Carro em outros programas
    saoIguais   : saoIguais     //estou exportando a função saoIguais para os objetos do tipo Carro poderem utiliaza-la em outros programas 
}
