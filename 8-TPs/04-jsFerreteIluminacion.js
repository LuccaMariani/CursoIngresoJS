/*

4.	Para el departamento de iluminación:

Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.

A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
//  txtIdCantidad
// txtIdPrecioDescuento
//  id="Marca"
// marcas: 
// ArgentinaLuz 
// FelipeLamparas
// JeLuz
// HazIluminacion
// Osram
//
function CalcularPrecio () 
{
	var precioLampara;
	var cantidadLampara;
	var marcaLampara;
	var precioSinDescuento;
	var precioConDescuento;

	precioLampara=35;

	cantidadLampara=txtIdCantidad.value;
		cantidadLampara=parseInt(cantidadLampara);

	marcaLampara=document.getElementById("Marca").value;

	precioSinDescuento=cantidadLampara*precioLampara;

	if(cantidadLampara<3)
	{
		precioConDescuento=precioSinDescuento;
	}
	else
	{
		if(cantidadLampara>5)//A B C D E
		{
			//A
			precioConDescuento=precioSinDescuento-(precioSinDescuento*0.5);
		}
		else
		{
			if(cantidadLampara>4)//B C D E
			{
				//B
				//ArgentinaLuz vs otra marca
				if(marcaLampara=="ArgentinaLuz")//ArgentinaLuz
				{
					precioConDescuento=precioSinDescuento-(precioSinDescuento*0.4);
				}
				//otraMarca descuento del 30%
				else
				{
					precioConDescuento=precioSinDescuento-(precioSinDescuento*0.3);
				}			
			}
			else
			{	
				//C D E
				if(cantidadLampara>3)
				{
					//C
					//"ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 %
					if((marcaLampara=="ArgentinaLuz")||(marcaLampara=="FelipeLamparas"))
					{
						precioConDescuento=precioSinDescuento-(precioSinDescuento*0.25);
					}
					//otra marca el descuento es del 20%.
					else
					{
						precioConDescuento=precioSinDescuento-(precioSinDescuento*0.2);
					}
				}
				else
				{
					//D 
					// Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
					// si es  “FelipeLamparas” 
					// se hace un descuento del 10 % y si es de otra marca un 5%.
					if(marcaLampara=="ArgentinaLuz")
					{-
						//argentina luz 15%
						precioConDescuento=precioSinDescuento-(precioSinDescuento*0.15);
					}
					else
					{
						if(marcaLampara=="FelipeLamparas")
						{
							//10 %
							precioConDescuento=precioSinDescuento-(precioSinDescuento*0.1);
						}
						else
						{
							//5%.
							precioConDescuento=precioSinDescuento-(precioSinDescuento*0.05);
						}
					}
				}
			}
		}
	}
	//E
	if(precioConDescuento>119)
	{
		//se debe sumar un 10% de ingresos brutos en informar del impuesto
		precioFinal=precioConDescuento+(precioConDescuento*0.1);

		impuesto=precioConDescuento*0.1;

		alert("Usted pago "+impuesto+" de IIBB.");
		txtIdprecioDescuento.value=precioFinal;
	}
	else//sin ingresos brutos
	{
		precioFinal=precioConDescuento;
		txtIdprecioDescuento.value=precioFinal;
	}
}