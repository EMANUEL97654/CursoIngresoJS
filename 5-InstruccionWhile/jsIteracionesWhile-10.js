/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
Emanuel Gonzalez Gartland
While 10 */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaPositivos;
	let sumaNegativos;
	let cantidadPositivos;
	let cantidadNegativos;
	let cantidadDeCeros;
	let cantidadPares;
	let acumulador;


	sumaPositivos = 0;
	sumaNegativos = 0;
	cantidadDeCeros = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	acumulador = 0;
	cantidadPares = 0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero :");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 0)
		{
			acumulador = acumulador + numeroIngresado;
			sumaPositivos += numeroIngresado;
			cantidadPositivos++;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				acumulador = acumulador + numeroIngresado;
				sumaNegativos += numeroIngresado;
				cantidadNegativos++;
			}
			else
			{
				
				cantidadDeCeros++;
				
			}
				
		if(numeroIngresado%2 == 0)
		{
			cantidadPares++;
		}
				
			

		}
		respuesta=prompt("Desea continuar?");
	}

	promedioPositivos = acumulador / cantidadPositivos;
	promedioNegativos = acumulador / cantidadNegativos;
	diferenciaPositivosyNegativos = sumaPositivos - sumaNegativos;
	document.write("La suma de positivos es:" + sumaPositivos + "<br>");
	document.write("La suma de negativos es :" + sumaNegativos + "<br>");
	document.write("La cantidad de ceros son :" + cantidadDeCeros + "<br>");
	document.write("La cantidad de numeros pares es :" + cantidadPares);
	document.write("El promedio de numeros postivos es:" + promedioPositivos + "<br>");
	document.write("EL promedio de numeros negativos es:" + promedioNegativos + "<br>");
	document.write("La diferencia entre positivos y negativos es :" + diferenciaPositivosyNegativos + "<br>");
}