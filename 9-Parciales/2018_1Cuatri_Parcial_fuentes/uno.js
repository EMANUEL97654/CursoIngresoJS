
/*Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
Emanuel Gonzalez Gartland 
Ejercicio 01 parcial 2018
*/
function mostrar()
{
/*     let ancho;
    let largo;
    let perimetro;

    ancho = prompt("Ingrese el valor del ancho del rectangulo:");
    largo = prompt("Ingrese el valor del largo del rectangulo");

    ancho = parseInt(ancho);
    largo = parseInt(largo);

    perimetro = (ancho*2) + (largo*2);

    alert("El perimetro del rectangulo es:" + " " + perimetro); */

    let ancho;
    let largo;
    let perimetro;

    ancho = prompt("Ingrese el ancho:");
    largo = prompt("Ingrese el largo:");

    ancho = parseInt(ancho);
    largo = parseInt(largo);


    perimetro = largo*2 + ancho*2;

    document.write("El perimetro del rectangulo es : " + " " + perimetro);
    



















}
