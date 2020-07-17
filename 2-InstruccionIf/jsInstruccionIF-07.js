//
//  txtIdEdad
//
function mostrar()
{
	var edad;
	var estado

	edad=txtIdEdad.value
		edad=parseInt(edad)
//
// no funcionaaaa D:
//
	estado=document.getElementById(estadoCivil)
	alert (estado)

	if(edad<18&&estado=="Soltero"){
	alert("Es muy pequeño para NO ser soltero.")
	}

}//FIN DE LA FUNCIÓN