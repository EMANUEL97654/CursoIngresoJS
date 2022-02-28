/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
Emanuel Gonzalez Gartland
Ejercicio 2 Parcial 2020
*/
function mostrar()
{

  let tipo;
  let cantidad;
  let precio;
  //let contadorArena;
  //let contadorCal;
  //let contadorCemento;
  let acumuladorArena;
  let acumuladorCemento;
  let acumuladorCal;
  let bandera;
  let respuesta;
  let contadorBolsas;
  let acumuladorBolsas;
  let porcentaje;
  let precioBruto;
  let precioFinal;
  let tipoMasCantidad;
  //let mayorBolsas;
  let tipoMasCaro;
  let precioMasCaro;

  porcentaje = 0;
  contadorBolsas = 0;
  acumuladorBolsas = 0;
  contadorArena = 0;
  contadorCal = 0;
  contadorCemento = 0;
  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  bandera = 0;
  respuesta = "si";
  

  while(respuesta == "si")
  {
    tipo = prompt("Ingrese el tipo que busca:");
    while(tipo != "arena" && tipo != "cal" && tipo != "cemento")
    {
      tipo = prompt("ERROR. Ingrese entre cemento,cal y arena:");
    }
    cantidad = prompt("Ingrese la cantidad de bolsas:");
    cantidad = parseInt(cantidad);
    while(cantidad < 0)
    {
      cantidad = prompt("ERROR. Ingrese una cantidad mayor a 0");
      cantidad = parseInt(cantidad);
    }
    acumuladorBolsas+= cantidad;
    contadorBolsas++;
    precio = prompt("Ingrese el precio por bolsa:");
    precio = parseInt(precio);
    while(precio < 0)
    {
      precio = prompt("ERROR.Ingrese un precio mayor a 0:");
      precio = parseInt(precio);
    }
    
    respuesta = prompt("Desea continuar?");

    switch(tipo)
    {
      case "arena":
        acumuladorArena++;
      break;
      case "cal":
        acumuladorCal++;
      break;
      case "cemento":
        acumuladorCemento++;
      break;
    }
    if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
    {
      tipoMasCantidad = "arena";
    }
    else
    {
      if(acumuladorCal > acumuladorCemento)
      {
        tipoMasCantidad = "cal";
      }
      else
      {
        tipoMasCantidad = "cemento";
      }
    }
    if(acumuladorBolsas > 10)
    {
      porcentaje = 15;
    }
    else
    {
      if(acumuladorBolsas > 30)
      {
        porcentaje = 25;
      }
    }
    

    if(bandera == 0)
    {
      bandera = 1;
      tipoMasCaro = tipo;
      precioMasCaro = precio;
    }
    else
    {
    
      if(precio > precioMasCaro)
    {
      tipoMasCaro = tipo;
      precioMasCaro = precio;
    }
  } 
  }

  precioBruto = acumuladorBolsas * precio;
  precioFinal = precioBruto - (precioBruto * porcentaje/100);
  document.write("El precio sin descuento es" + " " + precioBruto + "<br>");
  document.write("El precio final con descuento es " + " " + precioFinal + "<br>");
  document.write("El tipo con mas cantidad es" + " " + tipoMasCantidad + "<br>");
 document.write("El tipo mas caro es" + " " + tipoMasCaro + "<br>"); 
  

}
