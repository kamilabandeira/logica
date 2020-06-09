--Faça uma consulta que procure todos os carros que o nome começam com a letra ‘F’, utilize o comando like na consulta (não tenho carro com F)

select 
	nome
from carros
WHERE nome like "c%"