/*
Al presionar el botón pedir la CLAVE (ayuda: es utn750)
Emanuel Gonzalez Gartland
While 03
*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");//1er parte
	
	/*while(claveIngresada != "utn750")
	{
		alert("La clave no es correcta");/*bucle infinito de cosas incorrectas */
	//}

	while(claveIngresada != "utn750")//2da parte
	{
		claveIngresada = prompt("error, reingrese el número clave.");
	}
	alert("Bienvenido");
}

// la segunda parte del while es cuando yo evaluo la logica, y la tercer parte es la modificacion de la variable de control
// si yo me olvido de pedir el dato creo un bucle infinito