/*Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ". */
function mostrar()
{
  let nombre1;
  let nombre2;
  let peso1;
  let peso2;
  let suma;
  let promedio;

  nombre1 = prompt("Ingrese su nombre:");
  nombre2 = prompt("Ingrese el nombre de su pareja:");
  peso1 = prompt("Ingrese su peso:");
  peso2 = prompt("Ingrese el peso de su pareja:");

  peso1 = parseInt(peso1);
  peso2 = parseInt(peso2);

  suma = peso1 + peso2;
  promedio = (suma/2);

  alert("Ustedes se llaman" + " " + nombre1 + " " + "y" + " " + nombre2 + " " + "pesan" + " " + peso1 + " " + "y" + " " + peso2 + " " + "kilos, que sumados son" + " " + suma + " " + "kilos y el promedio de peso es" + " " + promedio );



}
