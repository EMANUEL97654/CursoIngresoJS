/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 
Emanuel Gonzalez Gartland
If 10
*/
function mostrar()
{
	let numeroRandom;
	numeroRandom = Math.floor(Math.random() * 11);

	if(numeroRandom == 9 || numeroRandom == 10)
	{
		alert("EXCELENTE :)" + " " + numeroRandom);
	}
	else if(numeroRandom > 3 && numeroRandom < 9){
		alert("APROBÓ :/" + " " + numeroRandom);
	}
	else if(numeroRandom < 4 ){
		alert("Vamos, la proxima se puede :(" + " " + numeroRandom);
	}

}