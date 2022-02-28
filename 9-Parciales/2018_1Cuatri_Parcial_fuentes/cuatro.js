/*Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
Emanuel Gonzalez Gartland
Ejercicio 04 Parcial 2018 
*/
function mostrar()
{
    let numero1;
    let numero2;
    let suma;
    let resta;

    numero1 = prompt("Ingrese un numero:");
    numero2 = prompt("Ingrese otro numero:");

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    suma = numero1 + numero2;
    resta = numero1 - numero2;

    if(numero1 == numero2)
    {
        alert((numero1) + (numero2)); 
    }
    else
    {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        if(numero1 > numero2)
        {
            
            alert(resta);
        }
        else
        {
            alert(suma);

        }
        if(suma > 10)
        {
            alert("La suma es " + " " + suma + " " + "y supero el 10");
        }    
    }
    
}
