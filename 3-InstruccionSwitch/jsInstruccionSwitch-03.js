//
//	Mariani, Luca
// ejercico 3
//
function mostrar()
{
	//tomo el mes
	var mes;

	mes=txtIdMes.value;

	switch(mes)
	{
		case "Febrero":
			alert(" Este mes no tiene más de 29 días.");
			break;
		default://el resto de casos, caen acá
			alert("Este mes tiene 30 o más días");
			break;
	}
}
