 //clase constructora de objetos
 class Producto {
     constructor(id, descripcion, stock, precio, imagen) {
         this.id = id;
         this.descripcion = descripcion;
         this.stock = stock;
         this.precio = precio;
         this.imagen = imagen;
     }
 };

 //objetos instanciados
 const microAmd5 = new Producto(1, "MICROPROCESADOR CPU AMD RYZEN 5 5600 6/12 ZEN3", 10, 43900, "../images/ryzen5.png");
 const microAmd7 = new Producto(2, "MICROPROCESADOR AMD RYZEN 7 5700X 8/16 4.6GHZ S/G S/COOLER ZEN3", 6, 58900, "../images/ryzen7.png");
 const microCoreI5 = new Producto(3, "MICROPROCESADOR INTEL CORE I5 10600K 4.8GHZ 6/12 12MB LGA1200 BULK", 8, 32900, "../images/corei5.png");
 const gabineteRaidmax = new Producto(4, "GABINETE RAIDMAX F01 RGB 4 FAN INCLUIDOS RGB TEMPLADO", 5, 18900, "../images/gabineteRGB.png");
 const gabineteThyphoon = new Producto(5, "GABINETE GAMEMAX TYPHOON COC FAN ARGB", 7, 11900, "../images/gabineteThyphoon.png");
 const gabineteBlanco = new Producto(6, "GABINETE THERMALTAKE H200 TG RGB SNOW", 6, 18900, "../images/gabineteBlanco.png");

 //-----   ----- Variables Globales----- -------  ----
 let total = 0;
 let seguirComprando = "";
 let subTotal = 0;
 let totalMasIva = 0;
 const productosElejidos = [];

 //Funcion para mostrar la cantidad y el producto elejido
 const resumenCantidad = (descripcion, cantidad) => `${descripcion} x ${cantidad} unidad/es.`;

 //Con esta funcion obtengo la cantidad y el subtotal
 const subTotalPorCantidad = (precio) => {
    do {
        cantidad = Number(prompt("¿Cuantas unidades quieres comprar?"));        
    } while (!(Number(cantidad)));
     subTotal = precio * cantidad;
     return subTotal;
 };
 //Con esta funcion agrego el Iva al subTotal
 const masIva = (total) => total * 1.21;


 //-----------------------
 //COMIENZO DE PROGRAMA
 //----------------------
 do {
     let precio = 0;
     let descripcion = "";
     let resumen = "";
     
     let comprarProducto = prompt(`Bienvenido a "Tu Mundo Digital"\nElije que producto quieres comprar  \n${microAmd5.id} -${microAmd5.descripcion} - $${microAmd5.precio} \n${microAmd7.id} -${microAmd7.descripcion} - $${microAmd7.precio} \n${microCoreI5.id} -${microCoreI5.descripcion} - $${microCoreI5.precio} \n${gabineteRaidmax.id} -${gabineteRaidmax.descripcion} - $${gabineteRaidmax.precio} \n${gabineteThyphoon.id} -${gabineteThyphoon.descripcion} - $${gabineteThyphoon.precio} \n${gabineteBlanco.id} -${gabineteBlanco.descripcion} - $${gabineteBlanco.precio}`);
     switch (comprarProducto) {
         case "":
             alert("No puedes ingresar vacia la respuesta");
             break;
         case "1":
             descripcion = microAmd5.descripcion
             precio = microAmd5.precio;
             subTotal = subTotalPorCantidad(precio);
             resumen = resumenCantidad(descripcion, cantidad)
             break;
         case "2":
             descripcion = microAmd7.descripcion
             precio = microAmd7.precio;
             subTotal = subTotalPorCantidad(precio); //aca guardo la funcion dentro de la variable para que sea mas legible. Nose si esta bien hacerlo asi o hay formas mejores.
             resumen = resumenCantidad(descripcion, cantidad)
             break;
         case "3":
             descripcion = microCoreI5.descripcion
             precio = microCoreI5.precio;
             subTotal = subTotalPorCantidad(precio);
             resumen = resumenCantidad(descripcion, cantidad)
             break;
         case "4":
             descripcion = gabineteRaidmax.descripcion
             precio = gabineteRaidmax.precio;
             subTotal = subTotalPorCantidad(precio);
             resumen = resumenCantidad(descripcion, cantidad)
             break;
         case "5":
             descripcion = gabineteThyphoon.descripcion
             precio = gabineteThyphoon.precio;
             subTotal = subTotalPorCantidad(precio);
             resumen = resumenCantidad(descripcion, cantidad)
             break;
         case "6":
             descripcion = gabineteBlanco.descripcion
             precio = gabineteBlanco.precio;
             subTotal = subTotalPorCantidad(precio);
             resumen = resumenCantidad(descripcion, cantidad)
             break;
         default:
             alert("ERROR: Tu respuesta es invalida");
             break;
     };
     productosElejidos.push(resumen + "\n");
     total += subTotal;
     totalMasIva = (masIva(total)).toFixed(2);
     seguirComprando = confirm("Quieres seguir comprando?");
 } while (seguirComprando);
 console.log(
     `Los productos elejidos son\n${productosElejidos}\n Su subtotal es $${total}\n Su total incluyendo el Iva del 21% es de $${totalMasIva}`);