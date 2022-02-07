/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambreAComprar;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = (largo*2) + (ancho*2);

    alambreAComprar = (perimetro) * 3;

    alert("La cantidad de alambre que hay que comrpar para el terreno es:" + " " + alambreAComprar);


}
function Circulo () 
{
	let radio;
    let perimetro;
    let pi = 3.14;
    let alambreAComprar;

    radio = document.getElementById("txtIdRadio").value;

    radio = parseInt(radio);

    perimetro = ((2*pi)* radio);

    alambreAComprar = (perimetro) * 3 ;

    alert("La cantidad de alambre a comprar para el terreno circular es :" + " " + alambreAComprar);

    


}
function Materiales () 
{
    let largo;
    let ancho;
    let cemento;
    let cal;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    cal = (largo*ancho) * 3;
    cemento = (largo*ancho) * 2;


    alert("Para hacer un contrapiso de: " + " " + largo + "x"  + ancho + " " + " se necesitan" + " " + cemento + " " + "bolsas de cemento" + " " + "y" + " " + cal + " " + "bolsas de cal");

}