/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
Emanuel Gonzalez Gartland
If 08
*/
function mostrar()
{
	let edadIngresada;
	let estadoCivil;
	edadIngresada = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada > 18 && estadoCivil == "Soltero") 
	{
		alert("Es soltero y no es menor");
	}
	


}