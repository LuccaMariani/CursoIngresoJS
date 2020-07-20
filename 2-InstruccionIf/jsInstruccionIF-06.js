//	Mariani, Juan Luca
//  txtIdEdad
//
function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
		edad=parseInt(edad);

	if(edad>17){
		alert("eres mayor de edad");
	}
	else 
	{
		if(edad<13)
		{
		alert("eres un niño");
		}
		else
		{
			alert("eres adolescente");
		}
	}
	
}