/*Al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días" 
Emanuel Gonzalez Gartland
Switch 03
*/
function mostrar()
{
	//tomo el mes
	let mesDelAnio;
	let mensaje;
	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Febrero":
			mensaje = "Este mes no tiene mas de 29 días";
		break;
		default:
			mensaje = "Es mes tiene 30 o más días";
		break;
	}

	alert(mensaje);
	


}//FIN DE LA FUNCIÓN