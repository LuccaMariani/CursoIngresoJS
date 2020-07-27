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
		case "Enero":
			alert("Que comiences bien el año!!!.");
			break;//con el break salis del switch
		case "Marzo":
			alert("A clases!!!.");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
		default://el resto de casos, caen acá
			break;
	}
}//FIN DE LA FUNCIÓN