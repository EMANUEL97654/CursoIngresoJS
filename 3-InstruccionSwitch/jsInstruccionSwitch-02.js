/*Al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
Emanuel Gonzalez Gartland
Switch 02 */
function mostrar()
{
	//tomo el mes
	let mesDelAnio;
	let mensaje;
	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Julio":
			mensaje = "Abrigate que hace frio";
		break;
		case "Agosto":
			mensaje = "Abrigate que hace frio";
		break;
		case "Junio":
			mensaje = "Falta para el invierno";
		break;
		case "Septiembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!";
		break;
		default:
			mensaje = "";
		break;
	}

	alert(mensaje);





}//FIN DE LA FUNCIÓN