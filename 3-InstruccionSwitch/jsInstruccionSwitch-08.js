/*
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
//Mariani, Juan Luca
function mostrar()
{
    var destinoIngresado;

    destinoIngresado=document.getElementById("txtIdDestino").value;

    switch(destinoIngresado)
    {
        case "Mar del plata":
        case "Cordoba":
        case "Cataratas":
            alert("Calor.");
            break;
       	case "Bariloche":
            alert("Frio.");
            break;
    }
}