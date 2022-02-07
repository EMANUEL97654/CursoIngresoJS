/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento()
{
	let importe;
	let resultado;

	importe = document.getElementById("txtIdImporte").value;

	importe = parseInt(importe);

	let descuento = prompt("Ingrese el monto del descuento:")

	resultado =(importe - (importe * descuento/100)) ;

	document.getElementById("txtIdResultado").value = resultado;

	alert("Su monto total es : " + resultado + " " +  "y se le hizo un descuento del " + descuento + "%");
}
