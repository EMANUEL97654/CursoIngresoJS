/*
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
 */
function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;
	let banderaMayorTemperatura;
	let mayorTemperatura;
	let nacionalidadMayorTemperatura;
	let contadorMayores;
	let promedioCasadas;
	let contadorSolteros;
	let contadorViudos;
	let contadorTerceraEdad;
	let contadorPersonas;
	let contadorCasadas;
	let acumuladorCasadas;

	contadorCasadas = 0;
	acumuladorCasadas = 0;
	contadorMayores = 0;
	contadorPersonas = 0;
	contadorSolteros = 0;
	contadorTerceraEdad = 0;
	contadorViudos = 0;
	banderaMayorTemperatura = 0;
	respuesta = "si";

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese un nombre: ");
		nacionalidad = prompt("Ingrese la nacionalidad: ");
		edad = prompt("Ingrese la edad:");
		edad = parseInt(edad);
		sexo = prompt("Ingrese el sexo: ");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR.Ingrese el sexo ( f o m ) :");
		}
		estadoCivil = prompt("Ingrese el estado civil: ");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("ERROR. Ingrese estado civil (viudo,casado o soltero)");
		}
		temperaturaCorporal = prompt("Ingrese la temperatura corporal: ");
		temperaturaCorporal = parseInt(temperaturaCorporal);


		if(banderaMayorTemperatura == 0)
		{
			banderaMayorTemperatura = 1;
			mayorTemperatura = temperaturaCorporal;
			nacionalidadMayorTemperatura = nacionalidad;
		}
		else
		{
			if(temperaturaCorporal > mayorTemperatura)
			{
				mayorTemperatura = temperaturaCorporal;
				nacionalidadMayorTemperatura = nacionalidad;
			}
		}
		if(edad > 17 && estadoCivil == "soltero")
		{
			contadorMayores++;
		}
		if(sexo == "f")
		{
			if(estadoCivil == "soltero")
			{
				contadorSolteros++;
			}
			else
			{
				if(estadoCivil == "viudo")
				{
					contadorViudos++;
				}
				else
				{
					contadorCasadas++;
					acumuladorCasadas+= edad;
				}
			}
		}
		if(edad > 60 && temperaturaCorporal > 38)
		{
			contadorTerceraEdad++;
		}

		respuesta = prompt("Desea continuar?");
	}

	promedioCasadas = acumuladorCasadas/contadorCasadas;

	document.write("La nacionalidad de la persona con mas temperatura es " + " " + nacionalidadMayorTemperatura + "<br>");
	document.write("La cantidad de mayores de edad solteros es" + " " + contadorMayores + "<br>");
	document.write("La cantidad de mujeres solteras es " + " " + contadorSolteros + " " + "y la cantidad de viudas es " + " " + contadorViudos + "<br>");
	document.write("De la tercera edad tienen mas de 38 de temperatura" + " " + contadorTerceraEdad + " " + "personas" + "<br>");
	document.write("El promedio de edad entre las mujeres casadas es " + " " + promedioCasadas + "<br>")
}
