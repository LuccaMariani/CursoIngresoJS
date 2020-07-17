//
//  txtIdEdad
//
function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
		edad=parseInt(edad);

	if(edad>=18||edad<13){
		alert ("no eres adolescente");
	}
}//FIN DE LA FUNCIÓN