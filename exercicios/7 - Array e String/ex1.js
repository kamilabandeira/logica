//Faça um algoritmo em que o usuário possa cadastrar preços de produtos e no final
//exiba o preço de cada produto junto com o valor total. após inserir todos os produtos o
//programa deve pedir o valor a ser pago, caso o valor passe do da compra exibir o troco,
//se o valor for menor informar que a compra vai ser cancelada.
//EX entradas :
//0.75
//0.25
//2.50
//Valor total pago: 5.00
//O programa imprime :
//Produto 1 - 0.75
//Produto 2 - 0.25
//Produtos 3 - 2.50
//Total da compra : 3.50 $
//Troco : 1.50 $//


var rs = require('readline-sync');
var numeroDeProdutos = rs.questionInt('Quantos produtos quer comprar? ');
var precos = [];
for (var contador = 0; contador < numeroDeProdutos; contador++) {
	var preco = rs.questionFloat('Diga o preço do produto: ');
	precos.push(preco);
}
// console.log('Preços: ' + precos);
var dinheiroDadoAoCaixa = rs.questionInt('Dê dinheiro para o caixa (não aceitamos moedas): ');
var totalDaCompra = 0;
for (var contador = 0; contador < precos.length; contador++) {
	var precoDoProdutoAtual = precos[contador];
	console.log(`Produto ${contador}: R$${precoDoProdutoAtual}`);
	var somaAcumuladaDosPrecos = totalDaCompra + precoDoProdutoAtual;
	totalDaCompra = somaAcumuladaDosPrecos;
}
console.log('Total da compra: R$' + totalDaCompra);
if (totalDaCompra > dinheiroDadoAoCaixa) {
	console.log('Não tem dinheiro o suficiente. Fiado só amanhã.');
} else if (dinheiroDadoAoCaixa > totalDaCompra) {
	console.log('Você deu mais dinheiro do que o necessário. Espere eu pegar o troco...');
	var troco = dinheiroDadoAoCaixa - totalDaCompra;
	console.log(`Toma aqui seus R$${troco} reais de troco! Obrigado por vir.`);
} else {
	console.log('Você deu o dinheiro exato. Obrigado!');
}