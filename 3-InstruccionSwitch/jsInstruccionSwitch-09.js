/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
Emanuel Gonzalez Gartland
Switch 09 */
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let estadia;
	let porcentaje;
	
	estadia = 15000;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;





	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 20;
				break;
				case "Cataratas":
					porcentaje = -10;
				break;
				case "Cordoba":
					porcentaje = -10;
				break;
				case "Mar del plata":
					porcentaje = -20;
				break;
			
			}break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = -20;
				break;
				case "Cataratas":
					porcentaje = 10;
				break;
				case "Cordoba":
					porcentaje = 10;
				break;
				case "Mar del plata":
					porcentaje = 20;
				break;
			}
			break;
		case "Otoño":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 10;
				break;
				case "Cataratas":
					porcentaje = 10;
				break;
				case "Cordoba":
					porcentaje = 0;
				break;
				case "Mar del plata":
					porcentaje = 10;
				break;
			}
			break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 10;
				break;
				case "Cataratas":
					porcentaje = 10;
				break;
				case "Cordoba":
					porcentaje = 0;
				break;
				case "Mar del plata":
					porcentaje = 10;
				break;
			}
			break;
	}

	estadia = estadia + (estadia * porcentaje/100);
	alert("El precio de la estadia es de " + estadia);
	

}