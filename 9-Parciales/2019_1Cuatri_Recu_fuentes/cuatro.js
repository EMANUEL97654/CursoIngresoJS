/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro el cuadrado del numero.
Si el primero divisible por el segundo, los resto,
de lo contrario muestro solo el resto.
si el resto es mayor a 3(tres ) informarlo por alert.
 */
function mostrar()
{
    let numero1;
    let numero2;
    let suma;

    numero1 = prompt("Ingrese un numero:");
    numero2 = prompt("Ingrese otro numero:");

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    suma = numero1 + numero2;
    resta = numero1 - numero2;
    division = numero1 / numero2;
    resto = numero1%numero2;
    if(numero1 == numero2)
    {
        alert("El cuadrado de la suma de los numeros es :" + (suma*suma));
    }
    else
    {
        if(division%2 == 0)
        {
            alert(resta);
        }
        else
        {
            alert(resto);
        }
    }
    if(resto > 3)
    {
        alert("El resto es mayor a 3");
    }
}
