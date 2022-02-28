/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
 */
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let contador;
	let banderaJabon;
	let masCaroUnidades;
	let masCaroFabricante;
	let contadorAlcohol;
	let contadorJabon;
	let contadorBarbijo;
	let acumuladorAlcohol;
	let acumuladorJabon;
	let acumuladorBarbijo;
	let mayorTipo;
	let promedio;
	let cantidadJabonCaro;
	let precioAlcohol;
	let precioBarbijo;
	let precioJabonCaro;
	let fabricanteJabonCaro;

	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	banderaJabon= 0;
	contador = 0;

	while(contador < 5)
	{
		tipo = prompt("Ingrese el tipo de producto :");
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
		{
			tipo = prompt("ERROR. Ingrese el tipo de producto entre alcohol, jabon o barbijo :");
		}
		precio = prompt("Ingrese el precio del producto :");
		precio = parseInt(precio);
		while(precio < 100 || precio > 300)
		{
			precio = prompt("ERROR. Ingrese el precio del producto entre 100 y 300 :");
			precio = parseInt(precio);
		}
		cantidad = prompt("Ingrese la cantidad de unidades: ");
		cantidad = parseInt(cantidad);
		while(cantidad < 1 || cantidad > 1000)
		{
			cantidad = prompt("ERROR.Ingrese la cantidad de unidades entre 1 y 1000: ");
			cantidad = parseInt(cantidad);
		}
		marca = prompt("Ingrese la marca del producto: ");
		fabricante = prompt("Ingrese el fabricante del producto: ");

		contador++;


		switch(tipo)
		{
			case "alcohol":
				acumuladorAlcohol += cantidad;
				contadorAlcohol++;
				precioAlcohol += precio;
			break;
			case "barbijo":
				acumuladorBarbijo += cantidad;
				contadorBarbijo++;
				precioBarbijo += precio;
			break;
			default:
				acumuladorJabon += cantidad;
				contadorJabon;
				if(banderaJabon == 0 || precioJabonCaro < precio)
				{
					precioJabonCaro = precio;
					cantidadJabonCaro = cantidad;
					fabricanteJabonCaro = fabricante;
					banderaJabon = 1;
				}
			break;
		}

		if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
		{
			mayorTipo = "alcohol";
			promedio = acumuladorAlcohol / contadorAlcohol;
		}
		else
		{
			if(acumuladorBarbijo > acumuladorJabon)
			{
				mayorTipo = "barbijo";

				promedio = acumuladorBarbijo / acumuladorBarbijo;
			}
			else
			{
				mayorTipo = "jabon";
				promedio = acumuladorJabon/contadorJabon;
			}
		}

	}
	if(banderaJabon == 1)
	{
		document.write("La cantidad de unidades del jabon mas caro es " + " " + cantidadJabonCaro + " " + "y su fabricante es " + " " + fabricanteJabonCaro + "<br>");
	}


	document.write("El tipo con mas unidades es  " + " "  + mayorTipo + " " + "y su promedio es " +  promedio + "<br>");
	document.write("El total de barbijos que se compro es " + " " + acumuladorBarbijo + "<br>");


}
