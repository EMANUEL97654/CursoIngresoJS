/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Emanuel Gonzalez Gartland
While 08
*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	//contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta='si';

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero :");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado;
			//contador++;
			
		}
		else
		{
			if(numeroIngresado < 0)
			{
				multiplicacionNegativos = (multiplicacionNegativos * numeroIngresado);
				//contador++;	
			}
		}
		respuesta = prompt("si,para continuar, otra cosa sale");
	}



	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}