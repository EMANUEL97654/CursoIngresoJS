/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
Emanuel Gonzalez Gartland
While 06
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador = 0;
	acumulador = 0;
	
	while(contador < 5)
	{
		contador++;
		numeroIngresado = prompt("Ingrese un numero :");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		
	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;
	/*txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;*/

	/*El acumulador es un concepto aunque no es mas que una variable
	Obtengo el numero
	Lo parseo
	Acumulador + una variable
	contador++;
	*/
}