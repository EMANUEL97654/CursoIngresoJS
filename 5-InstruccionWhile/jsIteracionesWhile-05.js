/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
Emanuel Gonzalez Gartland
While 05
*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("Ingrese f ó m");

	while(sexoIngresado != 'f' && sexoIngresado != 'm')
	{
		sexoIngresado = prompt("Ingrese f o m")
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
	alert("Su sexo es :" + " " + sexoIngresado );

}