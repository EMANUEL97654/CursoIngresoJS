/*Bienvenidos.
Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne
 */
function mostrar()
{
    /*let kilos;
    let sabor;
    let promedioKilos;
    let masLiviano;
    let contador;
    let acumuladorCarne;
    let acumuladorKilos;
    let saborMasLiviano;
    let bandera;
    let promedioCarne;
    let contadorCarne;

    contador = 0;
    acumuladorCarne = 0;
    acumuladorKilos = 0;
    masLiviano = 0;
    bandera = 0;
    contadorCarne = 0;
    acumuladorCarne = 0;

    while(contador < 10)
    {
        kilos = prompt("Ingrese los kilos de alimento que busca:");
        kilos = parseInt(kilos);
        while(kilos < 0 || kilos > 500)
        {
            kilos = prompt("ERROR. Ingrese los kilos de alimento  (entre 0 y 500):");
            kilos = parseInt(kilos);
        
        }
        sabor = prompt("Ingrese el sabor que busca:");
        while(sabor != "carne" && sabor != "vegetales" && sabor != "pollo")
        {
            sabor = prompt("Ingrese el sabor que busca:");
        }

        acumuladorKilos +=kilos;
        contador++;

    if(bandera == 0)
    {
        bandera = 1;
        masLiviano = kilos;
        saborMasLiviano = sabor;
    }
    if (kilos < masLiviano)
    {
        masLiviano = kilos;
        saborMasLiviano = sabor;
    }
    if(sabor == "carne")
    {
        contadorCarne++;
        acumuladorCarne += kilos;
    }
    }
    
promedioKilos = acumuladorKilos/contador;
promedioCarne = acumuladorCarne / contadorCarne;
document.write("El promedio de los kilos totales es:" + " " +  promedioKilos + "<br>");
document.write("El alimento mas liviano es de " + " "  + " " + masLiviano + " " + "kilo/s"+ " " + "y su sabor es" + " " + saborMasLiviano + "<br>");
document.write("La cantidad de sabor carne es" + " " + " " + contadorCarne + " " + "y su promedio es" + " " + promedioCarne);*/








    let kilos;
    let sabor; 
    let bandera;
    let contador;
    let acumuladorKilos;
    let promedioKilos;
    let masLiviano;
    let saborMasLiviano;
    let contadorCarne;
    let promedioCarne;
    let acumuladorCarne;

    acumuladorCarne = 0;
    acumuladorKilos = 0;
    contador = 0;
    bandera = 0;
    contadorCarne = 0;

    while(contador < 10)
    {
        kilos = prompt("Ingrese la cantidad de kilos: ");
        kilos = parseInt(kilos);
        while(kilos < 0 || kilos > 500)
        {
            kilos = prompt("ERROR.Ingrese la cantidad de kilos (entre 0 y 500): ");
            kilos = parseInt(kilos);
        }
        sabor = prompt("Ingrese el sabor: ");
        while(sabor != "carne" && sabor != "vegetales" && sabor != "pollo")
        {
            sabor = prompt("ERROR.El sabor tiene que ser carne, vegetales o pollo! : ");
        }
        contador++;
        acumuladorKilos += kilos;

        if(bandera == 0)
        {
            bandera = 1;
            masLiviano = kilos;
            saborMasLiviano = sabor;
        }
        else
        {
            if(kilos < masLiviano)
            {
                masLiviano = kilos;
                saborMasLiviano = sabor;
            }
        }
        if(sabor == "carne")
        {
            contadorCarne++;
            acumuladorCarne += kilos;
        }
    }


    promedioKilos = acumuladorKilos / contador;
    promedioCarne = acumuladorCarne / contadorCarne;
    
    document.write("El promedio de los kilos totales es: " + " " + promedioKilos + "<br>");
    document.write("El mas liviano pesa " + " " + masLiviano + " " + "kilo/s y su sabor es " + " " + saborMasLiviano +"<br>");
    document.write("La cantidad de sabor carne es" + " " + contadorCarne + " " + "y su promedio es" + " " + promedioCarne);

}
