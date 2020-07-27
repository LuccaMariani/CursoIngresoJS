/*
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
//	Mariani, Luca
//
//
function mostrar()
{
	//tomo la hora
	var horaDelDia;

	horaDelDia=txtIdHora.value;
		horaDelDia=parseInt(horaDelDia);

	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Son las "+horaDelDia+", es de mañana.");
			break;
		default:
			break;
	}
}