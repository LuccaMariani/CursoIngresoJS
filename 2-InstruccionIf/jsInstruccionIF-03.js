//
//  txtIdEdad
//
function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
		edad=parseInt(edad);

	if(edad>17){
		alert ("eres mayor de edad");
	}
	else{
		alert ("eres menor de edad");
	}
}