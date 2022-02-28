/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!. 
Emanuel Gonzalez Gartland
Switch 01
*/
function mostrar()
{
	//tomo el mes
	let mesDelAnio;
	let mensaje;
	mesDelAnio = document.getElementById("txtIdMes").value;
	alert(mesDelAnio);
	switch(mesDelAnio)
	{
		case "Enero":
			mensaje = ("Que comiences bien el año!!!");
		break;
		case "Marzo":
			mensaje = ("A clases!!!");
		break;
		case "Julio":
			mensaje = ("Se vienen las vacaciones!!!");
		break;
		case "Diciembre":
			mensaje = ("Felices fiestas!!!");
		break;
		default:
			mensaje = "No es ni enero, ni marzo, ni julio, ni diciembre";
		break;
	}

	alert(mensaje)

}

//Switch vino para no tener logica
// se puede meter logica dentro de un case