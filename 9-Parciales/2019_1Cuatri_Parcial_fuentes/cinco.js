/*Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
 */
function mostrar()
{
    let continente;
    let dias;
    let oferta;
    let porcentaje;
    let metodoDePago;
    let precioDescontado;
    let precioFinal;

    continente = document.getElementById("Marca").value;
    metodoDePago = prompt("Ingrese con que medio abonara:");
    dias = prompt("Ingrese la cantidad de dias que se va a quedar:");

    dias = parseInt(dias);

    oferta = 100 * dias;

    switch(continente)
    {
        case "América":
           switch(metodoDePago)
           {
               case "debito":
                   porcentaje = -60;
                break;
                default:
                    porcentaje = -50;
                break;
           }
        break;
            
        case "África":
            switch(metodoDePago)
            {
                case "mercadoPago":
                case "efectivo":
                    porcentaje = -75;
                break;
                default:
                    porcentaje = -60;
                break;
            }
        break;

        case "Europa":
            switch(metodoDePago)
            {
                case "debito":
                    porcentaje = -35;
                break;
                case "mercadoPago":
                    porcentaje = -30;
                break;
                case "efectivo":
                    porcentaje = -25;
                break;
                default:
                    porcentaje = -20;
                break;
            }
        break;

        default:
            porcentaje = 20;
        break;
    }
precioDescontado = oferta * (porcentaje/100);

precioFinal = oferta + precioDescontado;

alert(precioFinal);

}
