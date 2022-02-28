/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
Emanuel Gonzalez Gartland
While 07
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta =='si')
	{
		numeroIngresado = prompt("Ingrese un numero :");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador++;
		respuesta = prompt("si,para continuar, otra cosa sale");
	}

	promedio = acumulador/contador;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}

/*Dividir el while en 3 partes */