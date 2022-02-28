/* 
Bienvenidos (SOLO SWITCH).
Una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 15% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África u Oceania tiene un 30% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
en cualquier continenete , si paga con cheque, se recarga un 15% de impuesto al cheque
*/
function mostrar()
{
    let continente;
    let dias;
    let precio;
    let medioDePago;
    let estadia;
    let porcentaje;
    let precioFinal;
    let precioConPorcentaje;

    precio = 100;
    
    continente = document.getElementById("selecContinente").value;
    medioDePago = document.getElementById("selecPago").value;
    dias = prompt("Cuantos dias se va a quedar?");

    dias = parseInt(dias);

    estadia = precio * dias;

    switch(continente)
    {
        case "America":
            switch(medioDePago)
            {
                case "Débito":
                    porcentaje = -25;
                break;
                case "Cheque":
                    porcentaje = 15;
                break;
                default:
                    porcentaje = -15;
                break;
            }break;
        case "África":
        case "Oceania":
            switch(medioDePago)
            {
                case "MercadoPago":
                case "Efectivo":
                    porcentaje = -45;
                break;
                case "Cheque":
                    porcentaje = 15;
                break;
                default:
                    porcentaje = -30;
                break;
            }break;
        case "Europa":
            //porcentaje = -20;
            switch(medioDePago)
            {
                case "Débito":
                    porcentaje = -35;
                break;
                case "Cheque":
                    porcentaje = 15;
                break;
                case "MercadoPago":
                    porcentaje = -30;
                break;
                default:
                    porcentaje = -25;
                break; 
            }break;
        default:
            porcentaje = 20;
        break;
    }

precioConPorcentaje = estadia * (porcentaje/100);

precioFinal = estadia + precioConPorcentaje;

alert(precioFinal);

}
