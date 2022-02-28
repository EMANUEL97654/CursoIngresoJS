/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

*/
/*function CalcularPrecio () 
{
    let cantidadDeLamparas;
    let marca;
    let importe;
    let descuento;
    let precioFinal;
    let precioDescontado;
    let impuesto;

    
    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidadDeLamparas = parseInt(cantidadDeLamparas);
     
    importe = 35 * cantidadDeLamparas;

    switch(marca)
    {
        case "ArgentinaLuz":
        
        if(cantidadDeLamparas > 5)
        {
            descuento = 50;
        }
        else
        {
            if(cantidadDeLamparas == 5)
            {
                descuento = 40;
            }
            else
            {
                if(cantidadDeLamparas == 4)
                {
                    descuento = 25;
                }
                else
                {
                    if(cantidadDeLamparas == 3)
                    {
                        descuento = 15;
                    }
                    else 
                    {
                        if(cantidadDeLamparas < 3)
                        {
                            descuento = 0;
                        }
                    }
                }
            }
        }
        break;

        case "FelipeLamparas":
            
               if(cantidadDeLamparas > 5)
               {
                   descuento = 50;
               }
               else
               {
                   if(cantidadDeLamparas == 4 )
                   {
                       descuento = 25;
                   }
                   else
                   {
                       if(cantidadDeLamparas == 3)
                       {
                           descuento = 10;
                       }
                       else 
                       {
                        if(cantidadDeLamparas < 3)
                        {
                            descuento = 0;
                        }
                           
                       }
                   }
               } 
        break;
        default:
            if(cantidadDeLamparas > 5)
            {
                descuento = 50;
            }
            else
            {
                if(cantidadDeLamparas == 5)
                {
                    descuento = 30;
                }
                else
                {
                    if(cantidadDeLamparas == 4)
                    {
                        descuento = 20;
                    }
                    else
                    {
                        if(cantidadDeLamparas == 3)
                        {
                            descuento = 5;
                        }
                        else 
                        {
                            if(cantidadDeLamparas < 3)
                            {
                                descuento = 0;
                            }
                        }
                        }

                    }
                }
        break;
    }


precioDescontado = importe * (descuento /100);
precioFinal = importe - precioDescontado;
if (precioFinal > 120)
{
    impuesto = (precioFinal/100) * 10;
    precioFinal = precioFinal + impuesto;
    alert("Usted pago" + " " + precioFinal + " " + "de IIBB");
}
document.getElementById("txtIdprecioDescuento").value = precioFinal;

}*//*Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 Emanuel Gonzalez Gartland
 Switch/Switch TP 04
 */
function CalcularPrecio () 
{
    let cantidadDeLamparas;
    let marca;
    let importe;
    let descuento;
    let precioFinal;
    let precioDescontado;
    let impuesto;

    
    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidadDeLamparas = parseInt(cantidadDeLamparas);
     
    importe = 35 * cantidadDeLamparas;

   switch(marca)
   {
       case "ArgentinaLuz":
           switch(cantidadDeLamparas)
           {
               case 1:
               case 2:
                   descuento = 0;
                break; 
                case 3: 
                descuento = 15;
                break; 
                case 4:
                    descuento = 25;
                break;
                case 5:
                    descuento = 40;
                break;
                default:
                    descuento = 50;
                break;
           }break;
        case "FelipeLamparas":
            switch(cantidadDeLamparas)
            {
                case 1:
                case 2:
                    descuento = 0;
                break;
                case 3:
                    descuento = 10;
                break;
                case 4:
                    descuento = 25;
                break;
                default:
                    descuento = 50;
                break;
            }break;
        default:
            switch(cantidadDeLamparas)
            {
                case 1:
                case 2:
                    descuento = 0;
                break;
                case 3:
                    descuento = 5;
                break;
                case 4:
                    descuento = 20;
                break;
                case 5:
                    descuento = 30;
                break;
                default:
                    descuento = 50;
                break;
            }break;
   }


precioDescontado = importe * (descuento /100);
precioFinal = importe - precioDescontado;
if (precioFinal > 120)
{
    impuesto = (precioFinal/100) * 10;
    precioFinal = precioFinal + impuesto;
    alert("Usted pago" + " " + precioFinal + " " + "de IIBB");
}
document.getElementById("txtIdprecioDescuento").value = precioFinal;
}
