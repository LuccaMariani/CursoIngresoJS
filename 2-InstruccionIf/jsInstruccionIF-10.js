/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
//
//Mariani, Juan Luca

function mostrar()
{
	var numeroR;

	numeroR=Math.floor((Math.random()*(11-1))+1); 

	if(numeroR>4){
		if (numeroR>8){
			alert("EXELENTE: "+numeroR);	
		 }
		 else{
		 	alert("APROBÓ: "+numeroR);
		 }
	}
	else{
		alert("Vamos, la proxima se puede: "+numeroR);
	}

}