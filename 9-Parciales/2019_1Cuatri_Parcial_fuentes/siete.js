/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
Emanuel Gonzalez Gartland
ejercicio 07 parcial 2019
 */
function mostrar()
{
    let altura;
    let sexoIngresado;
    let promedio;
    let contador;
    let acumulador;
    let alturaMasBaja;
    let sexoMasBaja;
    let cantidadHombres;
    let cantidadMujeres;
    let acumuladorAltos;
    let acumuladorBajos;
    let acumuladorMasculinos;
    let acumuladorFemeninos;
    let contadorMasculinos;
    let contadorFemeninos;
    let banderaMujeres;
    let alturaMayor;
    let cantidadMujeresAltas;
    let mujeresAltas;
    let hombresAltos;
    let bandera;

    contadorMasculinos = 0;
    contadorFemeninos = 0;
    acumulador = 0;
    acumuladorAltos = 0;
    acumuladorBajos = 0;
    cantidadMujeresAltas = 0;
    cantidadMujeres = 0;
    acumuladorMasculinos = 0;
    acumuladorFemeninos = 0;
    banderaMujeres = 0;
    alturaMasBaja = 0;
    bandera = 0;

    for(let i = 0; i < 5; i++)
    {
        altura = prompt("Ingrese la altura en centimetros:");
        altura = parseInt(altura);
        acumulador += altura;
        contador ++;
    
    while(!(altura > 0 && altura < 250))
    {
        altura = prompt("Ingrese la altura en centimetros:");
        altura = parseInt(altura);
    }
    sexoIngresado = prompt("Ingrese el sexo del jugador:");
    while(sexoIngresado != 'f' && sexoIngresado != 'm')
    {
        sexoIngresado = prompt("Ingrese el sexo del jugador:");
    }
     switch(sexoIngresado)
    {
        case "m":
            acumuladorMasculinos += cantidadHombres;
            contadorMasculinos++;
        break;
        case "f":
            acumuladorFemeninos += cantidadMujeres;
            contadorFemeninos++;
        break;
    }
    if(bandera == 0)
    {
        alturaMasBaja = altura;
        //alturaMayor = altura;
    }else
    {
        if(altura < alturaMasBaja)
        {
        alturaMasBaja = altura;
        document.write(alturaMasBaja + " " + sexoIngresado);
        }
    }
    
    
    }
    /*promedio = acumulador / contador ;
    alert(promedio);*/
      
}
