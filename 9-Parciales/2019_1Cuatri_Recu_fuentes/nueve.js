/*Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino 
Emanuel Gonzalez Gartland
Recuperatorio 2019 ejercicio 09
*/
function mostrar()
{
    /*let nombre;
    let edad;
    let sexo;
    let notaFinal;
    let respuesta;
    let contadorVarones;
    let acumuladorVarones;
    let contadorMujeres;
    let acumuladorMujeres;
    let contadorVaronesAprobados;
    let contadorMujeresAprobadas;
    let contadorEstudiantes;
    let promedioMenores;
    let contadorMenores;
    let contadorAdolescentes;
    let acumuladorNotas;
    let promedioAdoslescentes;
    let contadorMayores;
    let promedioMayores;
    let promedioVarones;
    let promedioMujeres;


    contadorMayores = 0;
    acumuladorNotas = 0;
    contadorAdolescentes = 0;
    contadorEstudiantes = 0;
    contadorMenores = 0;
    contadorVarones = 0;
    acumuladorVarones = 0;
    contadorMujeres = 0;
    acumuladorMujeres = 0;
    contadorVaronesAprobados = 0;
    contadorMujeresAprobadas = 0;
    respuesta = "si";

    while(respuesta == "si")
    {
        nombre = prompt("Ingrese el nombre del estudiante:");
        edad = prompt("Ingrese la edad del estudiante:");
        edad = parseInt(edad);
        while(edad < 0 || edad > 100)
        {
            edad = prompt("ERROR.Ingrese una edad entre 0 y 100:");
            edad = parseInt(edad);
        }
        sexo = prompt("Ingrese el sexo del estudiante:");
        while(sexo != "f" && sexo != "m")
        {
            sexo = prompt("ERROR. Ingrese f o m como sexo :");
        }
        notaFinal = prompt("Ingrese la nota del final :");
        notaFinal = parseInt(notaFinal);
        while(notaFinal < 0 || notaFinal > 10)
        {
            notaFinal = prompt("ERROR. Ingrese una nota entre 0 y 10 :");
            notaFinal = parseInt(notaFinal);
        }
        respuesta = prompt("Desea continuar?");
        contadorEstudiantes++;
        acumuladorNotas += notaFinal;
        

        if(sexo == "m" && notaFinal > 6)
        {
            contadorVaronesAprobados++;
        }
        if(edad < 13)
        {
            contadorMenores++;
        }
        else 
        {
            if(edad > 13 && edad < 18)
            {
                contadorAdolescentes++;
            }
            else
            {
                contadorMayores++;
            }
        }
        if(sexo == "m")
        {
            contadorVarones++;
        }
        else
        {
            contadorMujeres++;
        }
    }

    promedioVarones = acumuladorNotas / contadorVarones;
    promedioMujeres = acumuladorNotas / contadorMujeres;
    promedioMenores = acumuladorNotas / contadorMenores;
    promedioAdoslescentes = acumuladorNotas / contadorAdolescentes;
    promedioMayores = acumuladorNotas / contadorMayores;
    document.write("La cantidad de varones aprobados es: " + " " + contadorVaronesAprobados + "<br>");
    document.write("El promedio de notas de los menores de edad es: " + " " + promedioMenores + "<br>");
    document.write("El promedio de notas de los adoslescentes es: " + " " + promedioAdoslescentes + "<br>");
    document.write("El promedio de notas de los mayores es: " + " " + promedioMayores + "<br>");
    document.write("El promedio de notas de los varones es " + " " + promedioVarones + " " + "y de las mujeres es" + " " + promedioMujeres + "<br>");*/


  let nombre;
  let edad;
  let sexo;
  let notaFinal;
  let respuesta;
  let contadorVaronesAprobados;
  let contadorMenores;
  let acumuladorVarones;
  let contadorAdolescentes;
  let acumuladorAdolescentes;
  let contadorMayores;
  let acumuladorMayores;
  let contadorVarones;
  let contadorMujeres;
  let acumuladorMujeres;
  let promedioMasculino;
  let promedioFemenino;
  let acumuladorMenores;
  let promedioAdoslescentes;
  let promedioMenores;
  let promedioMayores;

  contadorVarones = 0;
  contadorMujeres = 0;
  contadorAdolescentes = 0;
  contadorMayores = 0;
  contadorMenores = 0;
  contadorVaronesAprobados = 0;
  acumuladorAdolescentes = 0;
  acumuladorMayores = 0;
  acumuladorVarones = 0;
  respuesta = "si";

  while(respuesta == "si")
  {
      nombre = prompt("Ingrese el nombre: ");
      edad = prompt("Ingrese la edad: ");
      edad = parseInt(edad);
      while(edad < 0)
      {
        edad = prompt("ERROR. Ingrese una edad mayor a 0: ");
        edad = parseInt(edad);
      }
      sexo = prompt("Ingrese el sexo: ");
      while(sexo != "f" && sexo != "m")
      {
          sexo = prompt("ERROR.El sexo tiene que ser f o m:")
      }
      notaFinal = prompt("Ingrese la nota del final:");
      notaFinal = parseInt(notaFinal);
      while(notaFinal < 0 || notaFinal > 10)
      {
        notaFinal = prompt("ERROR.Ingrese la nota del final (entre 0 y 10):");
        notaFinal = parseInt(notaFinal);
      }

      if(sexo == "m")
      {
        contadorVarones++;
        acumuladorVarones = notaFinal;
        if(notaFinal > 3)
        {
            contadorVaronesAprobados++;
        }
      }
      else
      {
          contadorMujeres++;
          acumuladorMujeres += notaFinal;
      }

      if(edad < 13)
      {
          contadorMenores++;
          acumuladorMenores += notaFinal;
      }
      else
      {
          if(edad < 18)
          {
              contadorAdolescentes++;
              acumuladorAdolescentes += notaFinal;
          }
          else
          {
              if(edad > 17)
              {
                  contadorMayores++;
                  acumuladorMayores += notaFinal;
              }
          }
      }

      respuesta = prompt("Desea continuar?");
  }

    promedioMasculino = acumuladorVarones / contadorVarones;
    promedioFemenino = acumuladorMujeres/contadorMujeres;

    promedioMenores = acumuladorMenores / contadorMenores;
    promedioAdoslescentes = acumuladorAdolescentes / contadorAdolescentes;
    promedioMayores = acumuladorMayores/contadorMayores;

    document.write("La cantidad de varones aprobados es " + " " + contadorVaronesAprobados + "<br>");
    document.write("El promedio de notas de los menores de edad es " + promedioMenores  + "<br>");
    document.write("El promedio de nota de los mayores de edad es " + " " + promedioMayores + "<br>");
    document.write("El promedio de notas de los varones es " + " " + promedioMasculino + "<br>");
    document.write("El promedio de notas de las mujeres es " + " " + promedioFemenino + "<br>");
    document.write("El promedio de los adolescentes es " + " " + promedioAdoslescentes + "<br>");


}
