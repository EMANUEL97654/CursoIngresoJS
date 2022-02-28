/*Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
Emanuel Gonzalez Gartland
Switch 07 */
function mostrar()
{
	let destinoIngresado;
	let mensaje;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "Oeste";
		break;
		case "Cataratas":
			mensaje = "Norte";
		break;
		case "Mar del plata":
			mensaje = "Este";
		break;
		case "Ushuaia":
			mensaje = "Sur";
		break;
	}
	alert(mensaje);

}