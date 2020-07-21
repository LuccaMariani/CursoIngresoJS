//
//
// Math.random()	Devuelve un número aleatorio entre 0 y 1. 0<=x<1
// Math.round()		Redondea un número al número entero más próximo
// Math.floor()		Redondea al entero inferior
//

function mostrar()
{
	var numeroR;

	numeroR=Math.floor((Math.random()*(11-1))+1);

	alert ("Numero random del 1 al 10 inclusive: "+numeroR);
}//FIN DE LA FUNCIÓN