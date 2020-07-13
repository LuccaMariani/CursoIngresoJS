/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//manera 1:
	nombreIngresado=txtIdNombre.value;
	//sino esta el .value te salta un error tipico

	//el .value es solamente el valor, osea el texto. 
	//No el tamaño de tipografia, color, etc y otras caracteristicas.
	//manera 2 de hacerlo:
	//nombreIngresado=document.getElementById('txtIdNombre').value;
	//dentro de las comillas va el ID

	alert("Su nombre es: "+nombreIngresado);
}
