/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
 */
function mostrar()
{
    let letra;
    let numero;
    let respuesta;
    let contadorNumerosPares;
    let contadorNumerosImpares;
    let contadorCeros;
    let promedio;
    let acumuladorNegativos;
    let contadorNegativos;
    let acumuladorPositivos;
    let contadorPositivos;
    let banderaMaximo;
    let banderaMinimo;
    let letraMaximo;
    let letraMinimo;
    let numeroMinimo;
    let numeroMaximo;

    banderaMaximo = 0;
    banderaMinimo = 0;
    contadorNegativos = 0;
    contadorPositivos = 0;
    acumuladorNegativos = 0;
    acumuladorPositivos = 0;
    contadorCeros = 0;
    contadorNumerosImpares = 0;
    contadorNumerosPares = 0;
    respuesta = "si";

    while(respuesta == "si")
    {
        letra = prompt("Ingrese una letra: ");
        numero = prompt("Ingrese un numero: ");
        numero = parseInt(numero);
        while(numero < -100 || numero > 100)
        {
            numero = prompt("ERROR.Ingrese un numero entre -100 y 100: ");
            numero = parseInt(numero);
        }

        if(numero%2 == 0)
        {
            contadorNumerosPares++;
        }
        else
        {
            contadorNumerosImpares++;
        }
        if(numero > 0)
        {
            contadorPositivos++;
            acumuladorPositivos += numero;
        }
        else
        {
            if(numero < 0)
            {
                contadorNegativos++;
                acumuladorNegativos += numero;
            }
            else
            {
                contadorCeros++;
            }
        }

        if(banderaMaximo == 0)
        {
            banderaMaximo = 1;
            numeroMaximo = numero;
            letraMaximo = letra;
        }
        else
        {
            if(numero > numeroMaximo)
            {
                numeroMaximo = numero;
                letraMaximo = letra;
            }
        }
        if(banderaMinimo == 0)
        {
            banderaMinimo = 1;
            numeroMinimo = numero;
            letraMinimo = letra;
        }
        else
        {
            if(numero < numeroMinimo)
            {
                numeroMinimo = numero;
                letraMinimo = letra;
            }
        }


        respuesta = prompt("Desea continuar?");
    }
    
    promedio = acumuladorPositivos/contadorPositivos;

    document.write("La cantidad de numeros pares es " + " " + contadorNumerosPares + "<br>");
    document.write("La cantidad de numeros impares es " + " " + contadorNumerosImpares + "<br>");
    document.write("La cantidad de ceros es " + " " + contadorCeros + "<br>");
    document.write("El promedio de todos los numeros positivos ingresados es " + " " + promedio + "<br>");
    document.write("La suma de todos los numeros negativos es " + " " + acumuladorNegativos + "<br>");
    document.write("El numero y la letra del maximo es " + " " + numeroMaximo + " " + letraMaximo + "<br>");
    document.write("El numero y la letra del minimo es " + " " + numeroMinimo + " " + letraMinimo);
}
