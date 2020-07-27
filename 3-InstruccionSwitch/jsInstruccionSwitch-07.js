/*Al selecionar un destino , indicar el punto cardinal de nuestro pais 
 en donde se encuentra Norte, Sur, Este u Oeste 
 */
//	
//	Mariani, Luca
//
function mostrar()
{
    var destinoIngresado

    destinoIngresado=document.getElementById("txtIdDestino").value;

    switch(destinoIngresado)
    {
        case "Mar del plata":
            alert("Este");
            break;
        case "Cordoba":
            alert("Oeste");
            break;
        case "Bariloche":
            alert("Sur");
            break;
        case "Cataratas":
            alert("Norte");
            break;
    }
}