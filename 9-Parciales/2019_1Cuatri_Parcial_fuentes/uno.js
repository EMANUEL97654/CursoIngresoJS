/* Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
Emanuel Gonzalez Gartland
Ejercicio 01 Parcial 2019
*/
function mostrar()
{
    let lado;
    let perimetro;

    lado = prompt("Ingrese el valor del lado:");
    lado = parseInt(lado);

    perimetro = lado*3;

    alert("El perimetro del triangulo equilatero es :" + " " + perimetro);


}
