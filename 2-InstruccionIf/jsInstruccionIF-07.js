//
//  txtIdEdad
//
function mostrar()
{
	var edad;
	var estado;

	edad=txtIdEdad.value;
		edad=parseInt(edad);

	estado=document.getElementById("estadoCivil").value;

	//alert(edad<18);
	//alert(estado=="Soltero");
	//Testeos porque daba mal antes :(

	/* max 3

	if((edad<18)&&(estado=="Soltero"))
	{
	alert("Es muy pequeño para NO ser soltero.")
	}

	*/

	if(edad<18)
	{
		if(estado=="Soltero")
		{
		alert("Es muy pequeño para NO ser soltero."	
		}
		else{
			
		}
	}

}