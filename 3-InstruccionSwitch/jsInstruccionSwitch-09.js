/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un 
aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

//
// Mariani, Juan Luca
//
function mostrar()
{
	var estacionIngresada;
	var destino;
	var precio;
	var descuento;
	var precioConDescuento;

	estacionIngresada=txtIdEstacion.value;
	destino=txtIdDestino.value;
	precio=15000;


	switch(estacionIngresada)
	{
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento=0.8;
					//decuento 20%
				case "Mar del Plata":
					descuento=1.2;
					//aumento 20%
				break;
				default:
					descuento=1.1:
					//descuento 10%
				break;
			}
		break;
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					descuento=1.2;
					//aumento 10%
				break;
				case "Mar del Plata":
					descuento=0.8;
					//descuento 20%
				break;
				default:
					descuento=1.1;
					//aumento 10%
				break;
			}
		break;
		default:
			switch(destino)
			{
				case "Cordoba":
					descuento=1
				break;
				default:
					descuento=1.1;
					//aumento 10%
				break;
			}
		break;
	}
	precioConDescuento=precio*descuento;
	alert("La tarifa para "+destino+", en "+estacionIngresada+", va a se de $"+precioConDescuento+".");
}