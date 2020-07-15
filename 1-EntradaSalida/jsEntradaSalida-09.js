/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var Sueldo;
	var Resultado;
	var PorcentajeUno;
	

	Sueldo=txtIdSueldo.value;
		//Sueldo=parseInt(Sueldo);
	
	PorcentajeUno=Sueldo/10;
	Resultado=PorcentajeUno+Sueldo;
	//Resultado= Sueldo*1.1;


	txtIdResultado.value=Resultado;
}
