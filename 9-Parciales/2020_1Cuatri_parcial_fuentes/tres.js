/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
Emanuel Gonzalez Gartland
Ejercicio 03 parcial 2020
 */
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;
	let contadorMayores;
	let contadorViudos;
	let contadorCasado;
	let contadorSolteros;
	let banderaMayorTemperatura;
	let masTemperatura;
	let nombreMasTemperatura;
	let contadorHombres;
	let contadorTerceraEdad;
	let promedioSolteros;
	let acumuladorEdades;

	acumuladorEdades = 0;
	contadorTerceraEdad = 0;
	contadorHombres = 0;
	contadorMayores = 0;
	contadorCasado = 0;
	contadorViudos = 0;
	contadorSolteros = 0;
	banderaMayorTemperatura = 0;
	respuesta = "si";

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese el nombre: ");
		edad = prompt("Ingrese la edad: ");
		edad = parseInt(edad);
		sexo = prompt("Ingrese el sexo: ");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese el sexo: ");
		}
		estadoCivil = prompt("Ingrese el estado civil :");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Ingrese el estado civil: ");
		}
		temperaturaCorporal = prompt("Ingrese la temperatura corporal: ");
		
		acumuladorEdades += edad;

		if(banderaMayorTemperatura == 0)
		{
			banderaMayorTemperatura = 1;
			masTemperatura = temperaturaCorporal;
			nombreMasTemperatura = nombre;
		}
		else
		{
			if(temperaturaCorporal > masTemperatura)
			{
			masTemperatura = temperaturaCorporal;
			nombreMasTemperatura = nombre;
			}
		}
		if(edad > 18 && estadoCivil == "viudo")
		{
			contadorMayores++;
		}

		if(sexo == "m")
		{
			if(estadoCivil == "viudo")
			{
				contadorHombres++;
			}
			else
			{
				if(estadoCivil == "soltero")
				{
					contadorSolteros++;
				}
			}
		}

		if(edad > 60 && temperaturaCorporal > 38)
		{
			contadorTerceraEdad++;
		}

		respuesta = prompt("Desea continuar?");

	}
	promedioSolteros = acumuladorEdades / contadorSolteros ;
	document.write("El nombre de la persona con mas temperatura es " + nombreMasTemperatura + "<br>");
	document.write("La cantidad de mayores de edad viudos es " + " " + contadorMayores + "<br>");
	document.write("La cantidad de hombres que hay solteros o viudos es " + " " + contadorHombres + "<br>");
	document.write("La cantidad de personas de la tercera edad con temperatura mayor a 38 es " + " " + contadorTerceraEdad + "<br>");
	document.write("El promedio de edad entre los hombres solteros es " + " " + promedioSolteros + "<br>");

}
