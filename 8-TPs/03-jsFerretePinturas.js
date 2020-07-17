/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tempF;
	var tempC;

	tempF=txtIdTemperatura.value;
		tempF=parseInt(tempF);

	tempC=(tempF-32)*(5/9);

	alert(tempF+" Fahrenheit son "+tempC+" centígrados")
}

function CentigradosFahrenheit () 
{
	var tempF;
	var tempC;

	tempC=txtIdTemperatura.value;
		tempC=parseInt(tempC);

	tempF=(tempC*(9/5))+32;

	alert(tempC+" centígrados son "+tempF+" Fahrenheit")
}
