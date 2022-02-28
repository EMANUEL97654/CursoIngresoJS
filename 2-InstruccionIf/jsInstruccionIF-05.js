/*Al ingresar una edad solo debemos informar si la persona NO es adolescente. */

function mostrar()
{
	let edadIngresada;
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(!(edadIngresada > 12 && edadIngresada < 17)) 
	{
		alert("No es adolescente");
	}
}

/*Se usa el || porque no existe un numero que sea >17 y a la vez < 13 */
/*En este caso si negas la condicion y usas el && hay que dar vuelta lo que dice */