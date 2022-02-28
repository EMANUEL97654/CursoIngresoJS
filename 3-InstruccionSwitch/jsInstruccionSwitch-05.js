/*Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
Emanuel Gonzalez Gartland
Switch 05 */
function mostrar()
{
	//tomo la hora
	let horaDelDia;
	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia);
	let mensaje;
	
	switch(horaDelDia)
	{
		case  7:
			mensaje = "Es de mañana";
		break;
		case  8:
			mensaje = "Es de mañana";
		break;
		case  9:
			mensaje = "Es de mañana";
		break;
		case  10:
			mensaje = "Es de mañana";
		break;
		case  11:
			mensaje = "Es de mañana";
		break;
		default:
			mensaje = "";
		break;
	}

	alert(mensaje);
	
	
}