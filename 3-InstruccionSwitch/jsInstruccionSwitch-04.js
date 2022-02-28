/*Al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. 
Emanuel Gonzalez Gartland
Switch 04
*/
function mostrar()
{
	let mesDelAnio;
	let mensaje;
	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Febrero":
			mensaje = "Tiene 28 días";
		break;
		case "Enero":
			mensaje = "Tiene 31 dias";
		break;
		case "Marzo":
			mensaje = "Tiene 31 dias";
		break;
		case "Mayo":
			mensaje = "Tiene 31 dias";
		break;
		case "Julio":
			mensaje = "Tiene 31 dias";
		break;
		case "Agosto":
			mensaje = "Tiene 31 dias";
		break;
		case "Octubre":
			mensaje = "Tiene 31 dias";
		break;
		case "Diciembre":
			mensaje = "Tiene 31 dias";
		break;
		default:
			mensaje = "Tiene 30 dias";
		break;
	}
	
	alert(mensaje);



}