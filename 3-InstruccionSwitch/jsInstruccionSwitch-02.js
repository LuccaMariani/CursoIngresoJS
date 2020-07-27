//
//	Mariani, Luca
//
//
function mostrar()
{
	//tomo el mes
	var mes;

	mes=txtIdMes.value;

	switch(mes)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		default://el resto de casos, caen acá
			alert("Falta para el invierno.");
			break;
	}
}
/*
		case "Diciembre":
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			
			break;//con el break salis del switch
*/
