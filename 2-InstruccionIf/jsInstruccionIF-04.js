//
//  txtIdEdad
//
function mostrar()
{
	var edad;
	var alert1;

	edad=txtIdEdad.value;
		edad=parseInt(edad);

	if(edad>=18){
		alert1=("eres mayor (18 o mas años).");
	}
	else if(edad>=13){
		alert1=("eres adolescente (entre 13 y 17 años).");
	}
	else{
		alert1=("eres menor (menos de 13 años).");
	}
	alert (alert1);
}