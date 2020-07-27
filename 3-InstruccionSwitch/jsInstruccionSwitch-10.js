/*
Enunciado:
una agencia de viajes nos piden informar si hacemos 
viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/

//
// Mariani, Juan Luca
//
function mostrar()
{
	var estacionIngresada;
	var destino;
	var resultado;

	estacionIngresada=txtIdEstacion.value;
	destino=txtIdDestino.value;

	switch(estacionIngresada)
	{
		case "Verano":
			switch(destino)
			{
				case "Cataratas":
				case "Mar del Plata":
					alert("Se viaja a "+destino+".");
				break;
				default:
					alert("No se viaja a "+destino+".");
				break;
			}
		break;
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					alert("Se viaja a "+destino+".");
				break;
				default:
					alert("No se viaja a "+destino+".");
				break;
			}
		break;
		case "Otoño":
			alert("Se viaja a "+destino+".");
		break;	
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					alert("No se viaja a "+destino+".");
				break;
				default:
					alert("Se viaja a "+destino+".");
				break;
			}
	}
}