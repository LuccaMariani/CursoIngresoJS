/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function Sumar () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var Suma;

	PrecioUno=txtIdPrecioUno.value;
		PrecioUno=parseInt(PrecioUno);

	PrecioDos=txtIdPrecioDos.value;
		PrecioDos=parseInt(PrecioDos);

	PrecioTres=txtIdPrecioTres.value;
		PrecioTres=parseInt(PrecioTres);

	Suma=PrecioUno+PrecioDos+PrecioTres;

	alert ("La suma de los diferentes precios es : "+Suma);

}


function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var Suma;
	var Promedio;

	PrecioUno=txtIdPrecioUno.value;
		PrecioUno=parseInt(PrecioUno);

	PrecioDos=txtIdPrecioDos.value;
		PrecioDos=parseInt(PrecioDos);

	PrecioTres=txtIdPrecioTres.value;
		PrecioTres=parseInt(PrecioTres);

	Suma=PrecioUno+PrecioDos+PrecioTres;

	Promedio=Suma/3;

	alert ("La promedio de los diferentes precios es : "+Promedio);
	
}


function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var Suma;
	var Iva
	var PrecioFinal;

	PrecioUno=txtIdPrecioUno.value;
		PrecioUno=parseInt(PrecioUno);

	PrecioDos=txtIdPrecioDos.value;
		PrecioDos=parseInt(PrecioDos);

	PrecioTres=txtIdPrecioTres.value;
		PrecioTres=parseInt(PrecioTres);

	Suma=PrecioUno+PrecioDos+PrecioTres;

	Iva=(Suma*31)/100;

	PrecioFinal=Suma+Iva;

	alert ("El precio final de los diferentes productos mas el iva, es : "+PrecioFinal);
	
}