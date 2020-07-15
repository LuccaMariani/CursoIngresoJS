/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var Importe;
	var Resultado;
	var PorcentajeUno;
	

	Importe=txtIdImporte.value;
		Importe=parseInt(Importe);
	
	PorcentajeUno=Importe/7.5;
	Resultado=Importe-PorcentajeUno;

	//Resultado= Importe*0.75;

	txtIdResultado.value=Resultado;
}
