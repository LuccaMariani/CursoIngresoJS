/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//(((1))) primero definicion de variables
	var NumeroUno;
	var NumeroDos;
	var suma;
//parseInt transforma un cadena/string en numeros entero, si tiene letras las saltea completamente;
	NumeroUno=txtIdNumeroUno.value;
		NumeroUno=parseInt(NumeroUno);

	NumeroDos=txtIdNumeroDos.value;
		NumeroDos=parseInt(NumeroDos);

	suma= NumeroUno+NumeroDos;

	alert (suma);
//Nan  = Not a number
}

