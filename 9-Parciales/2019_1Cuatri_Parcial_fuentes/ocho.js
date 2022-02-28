/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
Emanuel Gonzalez Gartland
Parcial 2019 ejercicio 8 */
function mostrar()
{
    let letra;
    let numero;
    let respuesta;
    let bandera;
    let cantidadPositivos;
    let cantidadNegativos;
    let cantidadDeCeros;
    let promedio;
    let cantidadPares;
    let cantidadImpares;
    let acumuladorPositivos;
    let acumuladorNegativos;
    let sumaNegativos;
    let numeroMayor;
    let letraMayor;

    bandera = 0;
    respuesta = "si";
    cantidadPares = 0;
    cantidadImpares = 0;
    cantidadDeCeros = 0;
    acumuladorPositivos = 0;
    acumuladorNegativos = 0;
    cantidadPositivos = 0;
    //sumaNegativos = 0;
    

   
    
    while(respuesta == "si")
    {
        letra = prompt("Ingrese una letra:");
        numero = prompt("Ingrese un numero:");
        numero = parseInt(numero);
        while(numero < -100 && numero > 100)
        {
            numero = prompt("ERROR. Ingrese un numero entre -100 y 100:");
            numero = parseInt(numero);
        }
        if (numero%2 == 0)
        {
            cantidadPares++;
        }
        else
        {
            cantidadImpares++;
        }
        if(numero == 0)
        {
            cantidadDeCeros++;
        }
        else
        {
            if(numero < 0)
            {
                acumuladorNegativos += numero;
                sumaNegativos += numero;
                cantidadNegativos++; 
            }
            else
            {
                cantidadPositivos++;
                acumuladorPositivos += numero;
            }
        }
        if(bandera == 0)
    {
        bandera = 1;
        letraMayor = letra;
        numeroMayor = numero;
    }
    if(numero > numeroMayor)
    {
        numeroMayor = numero;
        letraMayor = letra;
    }
        respuesta = prompt("Si desea seguir escriba si");
    }
    

    promedio = acumuladorPositivos/cantidadPositivos;
    //sumaNegativos += acumuladorNegativos;
    document.write("La cantidad de ceros son :" + cantidadDeCeros + "<br>");
	document.write("El promedio de numeros postivos es:" + promedio + "<br>");
    document.write("La cantidad de numeros pares es :" + cantidadPares + "<br>");
    document.write("La cantidad de numeros impares es:" + cantidadImpares + "<br>");
    document.write("La suma de todos los numeros negativos es:" + acumuladorNegativos + "<br>");
    document.write("El numero y la letra del maximo son:" + numeroMayor + " " + letraMayor);


}
