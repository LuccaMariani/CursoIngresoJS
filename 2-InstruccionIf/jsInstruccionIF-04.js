//
//  txtIdEdad
//
function mostrar()
{
	var edad;
	//var alert1;

	edad=txtIdEdad.value;
		edad=parseInt(edad);

	/*

	if(edad>17){
		alert1=("eres mayor (18 o mas años).");
	}
	else{
		if(edad>12){
			alert1=("eres adolescente (entre 13 y 17 años).");
		}
		else{
			alert1=("eres menor (menos de 13 años).");
		}
	} 
	
	alert (alert1);

	*/

	if(edad<18)
	{
		if(edad>12)
		{
			alert("eres adolescente (entre 13 y 17 años).")
		}
	}
}