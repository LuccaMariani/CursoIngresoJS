/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
//	Mariani, Luca
//
//
function mostrar()
{
	var mes;

	mes=txtIdMes.value;

	switch(mes)
	{
		case "Febrero":
			alert("Tiene 28 dias.");
			break;
		case "Junio":
		case "Abril":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias.");
			break;
		default:
			alert("Tiene 31 dias.");
			break;
	}
}
/*
		
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Mayo":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		31
			
			break;//con el break salis del switch
*/
