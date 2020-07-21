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
//alert(edad)
//alert(estado)
	if(edad<18)
	{
		if(estado!="Soltero")
		{
			alert("Es muy pequeño para NO ser soltero."	)
		}
	}
	
/*
	if( (edad<18)    &&   (estado!="Soltero")  ) 

	{
	alert("Es muy pequeño para NO ser soltero.")
	}

	*/


}