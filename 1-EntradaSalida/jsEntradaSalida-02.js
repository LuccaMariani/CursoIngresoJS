/*	
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'

Al presionar el botón 'Mostrar'
debemos lograr tomar un dato por '=prompt()'
y luego mostrarlo por 'alert()'.*/
function mostrar()
{
	var nombre;//se coloca una unica vez la var (variable)
	nombre = prompt("En el recuadro de abajo, ingrese su nombre", "Ejemplo");
	alert ("El nombre ingresado es: "+nombre); //para colocar una variable junto a un comentario: "" UTILIZAR EL +

	//prueba

	/*nombre ="maria";
	alert (nombre);
	*/
}

