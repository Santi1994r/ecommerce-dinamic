 //clase constructora de objetos
 class Productos {
     constructor(id, descripcion, stock, precio, imagen) {
         this.id = id;
         this.descripcion = descripcion;
         this.stock = stock;
         this.precio = precio;
         this.imagen = imagen;
     }
 };
//objetos instanciados
 const microAmd5 = new Productos(1, "MICROPROCESADOR CPU AMD RYZEN 5 5600 6/12 ZEN3", 10, 43900, "../images/ryzen5.png");
 const microAmd7 = new Productos(2, "MICROPROCESADOR AMD RYZEN 7 5700X 8/16 4.6GHZ S/G S/COOLER ZEN3", 6, 58900, "../images/ryzen7.png");
 const microCoreI5 = new Productos(3, "MICROPROCESADOR INTEL CORE I5 10600K 4.8GHZ 6/12 12MB LGA1200 BULK", 8, 32900, "../images/corei5.png");
 const gabineteRaidmax = new Productos(4, "GABINETE RAIDMAX F01 RGB 4 FAN INCLUIDOS RGB TEMPLADO", 5, 18900, "../images/gabineteRGB.png");
 const gabineteThyphoon = new Productos(5, "GABINETE GAMEMAX TYPHOON COC FAN ARGB", 7, 11900, "../images/gabineteThyphoon.png");
 const gabineteBlanco = new Productos(6, "GABINETE THERMALTAKE H200 TG RGB SNOW", 6, 18900, "../images/gabineteBlanco.png");
//array con objetos dentro
 const productos = [
     microAmd5,
     microAmd7,
     microCoreI5,
     gabineteRaidmax,
     gabineteThyphoon,
     gabineteBlanco
 ];
//-----   ----- simulador ----- -------  ----

let seguirComprando = "";
let cantidad = 0;
let precio = 0;
let sumaTotalDeProductos = 0;
//funcion para sumar el precio de acuerdo a la cantidad.
const sumarPorCantidad = (precio, cantidad) => precio * cantidad;
const cantidadAElegir = () => cantidad = Number(prompt("¿Cuantas unidades quieres comprar?"));
const agregarACarrito = (productoElejido) => sumaTotalDeProductos += productoElejido;

 do {
    let comprarProducto = prompt(`Elije que producto quieres comprar  \n${microAmd5.id} -${microAmd5.descripcion} - $${microAmd5.precio} \n${microAmd7.id} -${microAmd7.descripcion} - $${microAmd7.precio} \n${microCoreI5.id} -${microCoreI5.descripcion} - $${microCoreI5.precio} \n${gabineteRaidmax.id} -${gabineteRaidmax.descripcion} - $${gabineteRaidmax.precio} \n${gabineteThyphoon.id} -${gabineteThyphoon.descripcion} - $${gabineteThyphoon.precio} \n${gabineteBlanco.id} -${gabineteBlanco.descripcion} - $${gabineteBlanco.precio}`);
     switch (comprarProducto) {
         case "":
             alert("No puedes ingresar vacia la respuesta");
             break;
         case "1":
            precio = microAmd5.precio;
            cantidadAElegir();
            precio = sumarPorCantidad(precio, cantidad);   
             break;
         case "2":
            precio = microAmd7.precio;
            cantidadAElegir();
            precio = sumarPorCantidad(precio, cantidad); 
             break;
         case "3":
            precio = microCoreI5.precio;
            cantidadAElegir();
            precio = sumarPorCantidad(precio, cantidad); 
             break;
         case "4":
            precio = gabineteRaidmax.precio;
            cantidadAElegir();
            precio = sumarPorCantidad(precio, cantidad); 
             break;
         case "5":
            precio = gabineteThyphoon.precio;
            cantidadAElegir();
            precio = sumarPorCantidad(precio, cantidad); 
             break;
         case "6":
            precio = gabineteBlanco.precio;
            cantidadAElegir();
            precio = sumarPorCantidad(precio, cantidad); 
             break;
         default:
             alert("ERROR: Tu respuesta es invalida");
             break;
     };
     sumaTotalDeProductos += precio;
     seguirComprando = confirm("Quieres seguir comprando?");
 } while (seguirComprando);

 console.log(`El total de su compra es ${sumaTotalDeProductos}`);