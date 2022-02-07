/*
Emanuel Gonzalez Gartland
e/s 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;
	let edadIngresada;
	let apellidoIngresado;
	//let mensaje;
	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;
	apellidoIngresado = prompt("Ingrese su apellido");
	alert("Usted se llama" + " " + nombreIngresado + "," + apellidoIngresado + " "  + " y tiene" + " " + edadIngresada + " años");


	/*mensaje = "Usted se llama" + " " + nombreIngresado + " " + " y tiene" + " " + edadIngresada + " años" 
	alert(mensaje);


	o

	mensaje = mensaje +

	
	
	*/


}

