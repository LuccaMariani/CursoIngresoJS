//
//  txtIdEdad
//
function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
		edad=parseInt(edad);

	if(edad==18){
		alert ("eres mayor de edad");
	} 
	else if(edad>18){
		alert ("eres mayor de edad");
	}
	else{
		alert ("no eres mayor de edad");
	}
}