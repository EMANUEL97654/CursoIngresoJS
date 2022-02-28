/*Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
Emanuel Gonzalez Gartland
Parcial 2019 ejercicio 9
 */
function mostrar()
{
    let pais;
    let cantidadHabitantes;
    let temperaturaMinima;
    let respuesta;
    let cantidadTemperaturaPares;
    let menosHabitantes;
    let bandera;
    let cantidadPaisesGrados;
    let acumuladorHabitantes;
    let promedioHabitantes;
    let contadorHabitantes;
    let temperaturaM;
    let paisMinimo;
    let paisMinHabitantes;

    bandera = 0;
    cantidadTemperaturaPares = 0;
    respuesta = "si";
    cantidadPaisesGrados = 0;
    acumuladorHabitantes = 0;
    contadorHabitantes = 0;
    temperaturaM = 0;
    



    while(respuesta == "si")
    {
        pais = prompt("Ingrese el nombre de un pais:");
        cantidadHabitantes = prompt("Ingrese la cantidad de habitantes de ese pais:");
        cantidadHabitantes = parseInt(cantidadHabitantes);
        while(cantidadHabitantes < 1 || cantidadHabitantes > 7000)
        {
            cantidadHabitantes = prompt("ERROR.Ingrese la cantidad de habitantes de ese pais entre 1 y 7000 (millones):");
            cantidadHabitantes = parseInt(cantidadHabitantes);     
        } 
        contadorHabitantes++;
        acumuladorHabitantes +=cantidadHabitantes;
        temperaturaMinima = prompt("Ingrese la temperatura minima registrada en el pais:");
        parseInt(temperaturaMinima);
        while(temperaturaMinima < -50 || temperaturaMinima > 50)
        {
            temperaturaMinima = prompt("ERROR.Ingrese una temperatura entre -50 y 50 ")
            parseInt(temperaturaMinima);
        }
        if(temperaturaMinima%2 == 0)
        {
            cantidadTemperaturaPares++;
        }
        if(bandera == 0)
        {
            bandera = 1;
            menosHabitantes = pais;
        }
        if(temperaturaMinima < temperaturaM)
        {
            temperaturaM = temperaturaMinima;
            paisMinHabitantes = pais;
        }
        if(cantidadHabitantes > menosHabitantes)
        {
            menosHabitantes = pais;
        }
        if(temperaturaMinima > 40)
        {
            cantidadPaisesGrados++;
            paisMinimo = pais;
        }
        respuesta = prompt("Desesa continuar?");
        
    }

    promedioHabitantes = acumuladorHabitantes/contadorHabitantes;
    document.write("La cantidad de temperaturas pares es: " + cantidadTemperaturaPares + "<br>");
    document.write("El pais con menos habitantes es: " + menosHabitantes + "<br>");
    document.write("La cantidad de paises que superan los cuarenta grados son: " + cantidadPaisesGrados + "<br>");
    document.write("El promedio de habitantes ingresados entre los paises es: " + promedioHabitantes + "<br>");
    document.write("El pais que registro la menor temperatura es:" + paisMinHabitantes + " " + "con una temperatura de" + " " + temperaturaM);
}
