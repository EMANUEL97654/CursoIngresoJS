/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultadoSuma;
	
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoSuma = numeroUno + numeroDos;
	alert(resultadoSuma);

}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultadoResta;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resultadoResta = numeroUno - numeroDos;
	alert(resultadoResta);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultadoMultiplicacion;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resultadoMultiplicacion = numeroUno * numeroDos;
	alert(resultadoMultiplicacion);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultadoDivision;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resultadoDivision = numeroUno / numeroDos;
	alert(resultadoDivision);
}

