/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */
function mostrar()
{
	let edadIngresada;
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada >= 18) 
	{
		alert("Usted es mayor de edad");	
	}
	else if(edadIngresada >= 13 && edadIngresada <= 17)
	{
		alert("Usted es adolescente");
	}
	else if(edadIngresada <= 12)
	{
		alert("Usted es un niño");
	}


}