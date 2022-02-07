/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;
	
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	/*Como los datos vienen como texto hay que parsearlos para convertirlos en enteros */

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado = numeroUno+numeroDos;
	alert(resultado);
}

