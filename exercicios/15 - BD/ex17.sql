--Deletar carros acima de 2010

SELECT                         --para deletar primeiro eu confiro rodando um select
	*
from carros
WHERE ano > 2001;

delete                        --deleto usando o mesmo filtro e depois confiro com o select novamente 
from carros
WHERE ano > 2001;