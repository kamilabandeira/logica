--Faça uma consulta que calcule a média de preços dos carros lançados após os anos 2000 utilize a função AVG

select 
	avg(valor)	
from carros
WHERE ano > 2000