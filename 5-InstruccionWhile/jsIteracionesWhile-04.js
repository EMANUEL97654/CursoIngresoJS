/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Emanuel Gonzalez Gartland
While 04
*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
		//console.log(numeroIngresado);
		//alert(numeroIngresado);
		//document.getElementById("txtIdNumero").value = numeroIngresado;
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}