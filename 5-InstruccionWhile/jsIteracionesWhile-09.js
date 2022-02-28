/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
Emanuel Gonzalez Gartland
While 09
*/
function mostrar()
{
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	
	banderaDelPrimero = "es el primero";
	respuesta = 'si';
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero :");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == "es el primero")
		{
			banderaDelPrimero = "cambiar la bandera";
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				if(numeroIngresado < numeroMaximo)
				{
					numeroMinimo = numeroIngresado;
				}
			}
		}
		respuesta=prompt("Desea continuar?");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}

/*La bandera la voy a comparar con el primer valor
Lo defino
lo comparo exactamente igual por lo que defino
y luego lo cambio
Va a entrar una sola vez al if
 */