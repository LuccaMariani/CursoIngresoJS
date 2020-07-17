/*2.	
Enunciado:
2. Para el departamento de Construcción:
A. mostrar la cantidad de alambre a comprar si se ingresara el largo y 
el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

B. mostrar la cantidad de alambre a comprar si se ingresara el 
radio de un terreno circular y se debe alambra con tres hilos de alambre.

C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas del terreno rectangular.
*/

/*txtIdLargo.value
txtIdAncho.value
txtIdRadio.value*/

function Rectangulo () 
{
	var ancho;
	var largo;
	var perimetro;
	var perimetroTotal;

	ancho=txtIdAncho.value;
		ancho=parseInt(ancho);
	largo=txtIdLargo.value;
		largo=parseInt(largo);

	perimetro=(2*ancho)+(2*largo);
	perimetroTotal=perimetro*3;//3 hiladas de alambre

	alert ("La cantidad de alambre necesario para alambrar el perimetro rectangular serían: "+perimetroTotal);
}

function Circulo () 
{
	var radio;
	var perimetro;
	var perimetroTotal;

	radio=txtIdRadio.value;
		radio=parseInt(radio);//parseFloat: numero con coma, no entero

	perimetro=2*Math. PI*radio;
	perimetroTotal=perimetro*3;//3 hiladas de alambre

	alert ("La cantidad de alambre necesario para alambrar el perimetro circular serían: "+perimetroTotal);
}
function Materiales () 
{

	//Math.pow(base, exponente)    
	var ancho;
	var largo;
	var cal;
	var cemento;
	var area;

	ancho=txtIdAncho.value;
		ancho=parseFloat(ancho);
	largo=txtIdLargo.value;
		largo=parseFloat(largo);

	area=ancho*largo;
	//alert("Area: "+area)
	cal=area*2;
	cemento=area*3;
	cal=Math.ceil(cal);		//returns the value of x rounded up to its nearest integer
	cemento=Math.ceil(cemento);

	alert ("Cantidad de bolsas de cal: "+cal+".\nCantidad de bolsas de cal cemento: "+cemento+".");
// El \n hace un salto de linea tipo Enter, se escribe  Alt
}