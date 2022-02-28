/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
Emanuel Gonzalez Gartland
Parcial 2020 ejercicio 1
 */
function mostrar()
{
	let tipo;
	let cantidad;
	let precio;
	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let marca;
	let fabricante;
	let contadorBarbijo;
	let contadorAlcohol;
	let contadorJabon;
	let precioAlcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let promedio;
	let mayorTipo;
	let banderaAlcohol;// pongo una bandera para saber si es el primer alcohol o el segundo y guardar el dato

	acumuladorBarbijo = 0;
	acumuladorAlcohol = 0;
	acumuladorJabon = 0;

	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;

	banderaAlcohol = 0;
	

	
	//utilizo un for porque conozco la cantidad de repeticiones
	for(let i=0; i<5; i++)
	{
		tipo = prompt("Ingrese tipo de producto:");
		while(tipo != "alcohol" && tipo!= "barbijo" && tipo != "jabon")
		{
			tipo = prompt("Error.Ingrese tipo de producto (alcohol,jabon o barbijo):");
		}
		//alert(tipo);
		precio = prompt("Ingrese el precio del producto:");
		precio = parseInt(precio);
		while(precio < 100 || precio > 300)
		{
			precio = prompt("Error.Ingrese el precio del producto entre 100 y 300:");
			precio = parseInt(precio);
		}
		cantidad = prompt("Ingrese la cantidad de productos:");
		cantidad = parseInt(cantidad);
		while(cantidad < 0 || cantidad > 1000)
		{
			cantidad = prompt("Error. Ingrese la cantidad de productos con un maximo de 1000:");
			cantidad = parseInt(cantidad);
		}
		marca = prompt("Ingrese la marca del producto:");
		fabricante = prompt("Ingrese el fabricante del producto:");

		// uso un switch para guardar la cantidad de cada producto
		switch(tipo)
		{
			case "barbijo":
				acumuladorBarbijo = acumuladorBarbijo + cantidad;
				contadorBarbijo++;
				break;

			case "alcohol":
				acumuladorAlcohol = acumuladorAlcohol + cantidad;
				contadorAlcohol++;
				if(banderaAlcohol == 0 || precioAlcoholBarato > precio)//
				{
					precioAlcoholBarato = precio;
					cantidadAlcoholBarato = cantidad
					fabricanteAlcoholBarato = fabricante;
					banderaAlcohol = 1;
				}
				break;
				
			case "jabon":
				acumuladorJabon = acumuladorJabon + cantidad;
				contadorJabon++;
				break;
		}
	}
	// tendria que analizar cual es el acumulador mas grande
	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{
		mayorTipo = "alcohol";
		promedio = acumuladorAlcohol / contadorAlcohol;
	}
	else
	{
		if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon)
		{
			mayorTipo= "barbijo";
			promedio = acumuladorBarbijo / contadorBarbijo;
		}
		else
		{
			mayorTipo = "jabon"
			promedio = acumuladorJabon / contadorJabon;
		}
	}
	if(banderaAlcohol == 1)
	{
		alert("El fabricante del alcohol barato es :" + " " + fabricanteAlcoholBarato + " \n Cantidad :" + cantidadAlcoholBarato + "\n Precio:" + precioAlcoholBarato);
	}

	alert("El tipo con mas unidades es:" + " " + mayorTipo + " y el promedio es :" + " " + promedio);
	alert("Las unidades de jabones fueron:" + " " + acumuladorJabon);

}
