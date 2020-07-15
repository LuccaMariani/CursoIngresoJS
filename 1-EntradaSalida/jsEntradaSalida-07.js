/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var NumeroUno;
	var NumeroDos;
	var sumar;

	NumeroUno=txtIdNumeroUno.value;
	NumeroDos=txtIdNumeroDos.value;

	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);

	sumar= NumeroUno+NumeroDos;

	alert (sumar);
	
}

function restar()
{
	var NumeroUno;
	var NumeroDos;
	var restar;

	NumeroUno=txtIdNumeroUno.value;
	NumeroDos=txtIdNumeroDos.value;

	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);

	restar= NumeroUno-NumeroDos;

	alert (restar);
	
}

function multiplicar()
{ 
	var NumeroUno;
	var NumeroDos;
	var multiplicar;

	NumeroUno=txtIdNumeroUno.value;
	NumeroDos=txtIdNumeroDos.value;

	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);

	multiplicar= NumeroUno*NumeroDos;

	alert (multiplicar);
	
}

function dividir()
{
	var NumeroUno;
	var NumeroDos;
	var dividir;

	NumeroUno=txtIdNumeroUno.value;
	NumeroDos=txtIdNumeroDos.value;

	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);

	dividir= NumeroUno/NumeroDos;

	alert (dividir);
	
}

