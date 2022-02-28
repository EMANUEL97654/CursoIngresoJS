/*Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
Emanuel Gonzalez Gartland
Ejercicio 5 Parcial 2018 */
function mostrar()
{
    let planeta;

    planeta = prompt("Ingrese el nombre de un planeta:");

    switch(planeta)
    {
        case "tierra":
            alert("Aca vivimos");
        break;
        case "mercurio":
            alert("Aca hace más calor");
        break;
        case "venus":
            alert("Aca hace más calor");
        break;
        case "neptuno":
            alert("Aca hace mas frio");
        break;
        default:
            alert("No es un planeta valido");
        break;
    }
}
