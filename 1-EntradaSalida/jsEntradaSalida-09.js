/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe;
	let aumento= prompt("Ingrese el aumento:");
	let resultado;


	importe = document.getElementById("txtIdSueldo").value;

	importe = parseInt(importe);
	aumento = parseInt(aumento);

	resultado = (importe + (importe * aumento/100));

	document.getElementById("txtIdResultado").value = resultado;

	alert("El aumento fue de :" + " " + aumento + "%" + " y el monto final quedo" + " " + resultado);
}
