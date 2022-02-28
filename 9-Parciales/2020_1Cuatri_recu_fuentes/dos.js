/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro */
function mostrar()
{
  let tipo;
  let cantidad;
  let precio;
  let respuesta;
  let precioBruto;
  let contadorBolsas;
  let contadorCemento;
  let contadorCal;
  let contadorArena;
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  let bandera;
  let acumuladorBolsas;
  let tipoMasCaro;
  let precioCaro;
  let descuento;
  let importeTotal;
  let mayorTipo;

  acumuladorBolsas = 0;
  bandera = 0;
  contadorArena = 0;
  contadorBolsas = 0;
  contadorCal = 0;
  contadorCemento = 0;
  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  respuesta = "si";

  
  while(respuesta == "si")
  {
    tipo = prompt("Ingrese el producto :");
    while(tipo != "arena" && tipo != "cal" && tipo != "cemento")
    {
      tipo = prompt("ERROR. El tipo tiene que ser arena,cal o cemento :");
    }
    cantidad = prompt("Ingrese la cantidad de bolsas: ");
    cantidad = parseInt(cantidad);
    precio = prompt("Ingrese el precio: ");
    precio = parseInt(precio);
    while(precio < 0)
    {
    precio = prompt("ERROR. El precio tiene que ser mayor a 0: ");
    precio = parseInt(precio);
    }
    
    precioBruto = precioBruto + (precio * cantidad);
    contadorBolsas++;
    acumuladorBolsas += cantidad;

    if(bandera == 0)
    {
      bandera = 1;
      precioCaro = precio;
      tipoMasCaro = tipo;
    }
    else
    {
      if(precio > precioCaro)
      {
        precioCaro = precio;
        tipoMasCaro = tipo;
      }
    }
    switch(tipo)
    {
      case "arena":
        acumuladorArena += cantidad;
      break;
      case "cal":
        acumuladorCal += cantidad;
      break;
      default:
        acumuladorCemento += cantidad;
      break;
    }
    respuesta = prompt("Desea continuar?");
 
  
  }
  if(acumuladorBolsas > 30)
  {
    descuento = 25;
  }
  else
  {
    if(acumuladorBolsas > 10)
    {
      descuento = 15;
    }
    else
    {
      descuento = 0;
    }
  }
  importeTotal = precioBruto - (precioBruto * descuento/100);
  
  if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
  {
    mayorTipo = "arena";
  }
  else
  {
    if(acumuladorCal > acumuladorCemento)
    {
      mayorTipo = "cal";
    }
    else
    {
      mayorTipo = "cemento";
    }
  }

  
  document.write("El importe total a pagar es" + " " + precioBruto + "<br>");
  document.write("El importe total a pagar con descuento es" + " " + importeTotal + "<br>");
  document.write("El tipo con mas cantidad de bolsas es " + " " + mayorTipo + "<br>");
  document.write("El tipo mas caro es" + " " + tipoMasCaro + "<br>");

}
