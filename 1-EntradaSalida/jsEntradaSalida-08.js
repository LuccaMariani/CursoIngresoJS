/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//el modulo que utilizamos para sacar el resto, es el porcentaje %
	// ejemplo, alert(7%2)  deberia darme 1

	var NumeroDividendo;
	var NumeroDivisor;
	var Resultado;

	NumeroDividendo=txtIdNumeroDividendo.value;
		NumeroDividendo=parseInt(NumeroDividendo);


	NumeroDivisor=txtIdNumeroDivisor.value;
		NumeroDivisor=parseInt(NumeroDivisor);

	Resultado= NumeroDividendo%NumeroDivisor;

	alert ("El resto es: "+Resultado);

}
