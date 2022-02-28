/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantida de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color
 */
function mostrar()
{
   /* let color;
    let valor;
    let respuesta;
    let contadorRojos;
    let contadorVerdes;
    let contadorAmarillos;
    let contadorRojosInferiores;
    let contadorVehiculosInferiores;
    let promedioVehiculos;
    let contadorVehiculos;
    let acumuladorVehiculos;
    let masCaro;
    let bandera;
    let colorCaro;

    respuesta = "si";
    contadorRojos = 0;
    contadorVerdes = 0;
    contadorAmarillos = 0;
    contadorRojosInferiores = 0;
    contadorVehiculosInferiores = 0;
    contadorVehiculos = 0;
    acumuladorVehiculos = 0;
    bandera = 0;
    

    while(respuesta == "si")
    {
        color = prompt("Ingrese el color del auto:");
        while(color != "rojo" && color != "verde" && color != "amarillo")
        {
            color = prompt("ERROR.Ingrese el color otra vez eligiendo entre rojo , amarillo o verde.");
        }
        valor = prompt("Ingrese el valor del auto:");
        valor = parseInt(valor);
        while(valor < 0 || valor > 10000)
        {
            valor = prompt("ERROR. Ingrese valor entre 0 y 10000");
            valor = parseInt(valor);
        }
        respuesta = prompt("Desea continuar?");
        acumuladorVehiculos += valor;
        contadorVehiculos++;

        if(color == "rojo")
        {
        contadorRojos++;
        }
        if(color == "rojo" && valor > 5000)
        {
            contadorRojosInferiores++;
        }
        if(valor < 5000)
        {
            contadorVehiculosInferiores++;
        }
        if(bandera == 0)
        {
            bandera = 1;
            masCaro = valor;
            colorCaro = color;
        }
        if(valor > masCaro)
        {
            masCaro = valor;
            colorCaro = color;
        }
    }

    promedioVehiculos = acumuladorVehiculos / contadorVehiculos;
    document.write("La cantidad de rojos es" + " " + contadorRojos + "<br>");
    document.write("La cantidad de vehiculos rojos con valor mayor a cincomil es" + " " + contadorRojosInferiores + "<br>");
    document.write("La cantidad de vehiculos con precio inferior a cincomil es " + " " + contadorVehiculosInferiores + "<br>");
    document.write("El promedio de todos los vehiculos ingresados es " + " " + promedioVehiculos + "<br>");
    document.write("El auto mas caro es" + " " + masCaro + " " + "y su color es" + " " + colorCaro);
*/




    let color;
    let valor;
    let respuesta;
    let contadorRojos;
    let contadorRojosInferiores;
    let contadorVehiculos;
    let contadorVehiculosInferiores;
    let acumuladorVehiculos;
    let bandera;
    let promedio;
    let masCaro;
    let colorMasCaro;

    bandera = 0;
    contadorVehiculos = 0;
    acumuladorVehiculos = 0;
    contadorRojosInferiores = 0;
    contadorVehiculosInferiores = 0;
    contadorRojos = 0;
    respuesta = "si";

    while(respuesta == "si")
    {
        color = prompt("Ingrese el color del vehiculo: ");
        while(color != "rojo" && color != "verde" && color != "amarillo")
        {
            color = prompt("ERROR. Ingrese un color entre rojo, verde o amarillo:");
        }
        valor = prompt("Ingrese el valor del vehiculo: ");
        valor = parseInt(valor);
        while(valor < 0 || valor > 10000)
        {
            valor = prompt("ERROR. Ingrese un valor entre 0 y 10000: ");
            valor = parseInt(valor);
        }
        
        contadorVehiculos++;
        acumuladorVehiculos += valor;

        if(color == "rojo")
        {
            contadorRojos++;
            if(valor > 5000)
            {
                contadorRojosInferiores++;
            }
        }

        if(valor < 5000)
        {
            contadorVehiculosInferiores++;
        }

        if(bandera == 0)
        {
            bandera = 1;
            masCaro = valor;
            colorMasCaro = color;
        }
        else
        {
            if(valor > masCaro)
            {
                masCaro = valor;
                colorMasCaro = color;
            }
        }

        respuesta = prompt("Desea continuar?")

    }
    promedio = acumuladorVehiculos/contadorVehiculos;

    document.write("La cantidad de vehiculos color rojo es " + " "+ contadorRojos + "<br>");
    document.write("La cantidad de rojos con precio mayor a cincomil es " + " " + contadorRojosInferiores + "<br>");
    document.write("La cantidad de vehiculos con precio menor a cincomil es " + " " + contadorVehiculosInferiores + "<br>");
    document.write("El promedio de todos los vehiculos ingresado es " + " " + promedio + "<br>");
    document.write("El mas caro vale " + " " + masCaro + " " + "y su color es " + " " + colorMasCaro); 

}
