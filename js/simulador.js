 
 let buyAgain = "";
 let eleccion = prompt(`Bienvenido a "Tu Mundo Digital"\n¿Quieres comprar algo?`).toLowerCase();

 const comprarDevuelta = () => {
   while (eleccion != "si" && eleccion != "no") {
      alert("Ingresa si o no")
      eleccion = prompt(`¿Quieres comprar algo?`).toLowerCase()
    };
}

const solicitarCantidad = () => {
  let cantidad = 0;
  do {
    cantidad = Number(prompt("¿Cuantas unidades quieres comprar?"));
  } while (!(Number(cantidad)));
  return cantidad;
};
const agregarACarrito = (producto) => {
 //funcion que verifique si el objeto ya existe o no para solo modificar la cantidad.
  carrito.push({
    descripcion: producto.descripcion,
    precio: producto.precio,
    cantidad : solicitarCantidad()
  });
};

comprarDevuelta();
 do {
   if (eleccion === "si" || buyAgain) {
     let precio = 0;
     let descripcion = "";
     //mapeo del id, descripcion y precio de todos los productos
     let todosLosProductos = PRODUCTOS.map((producto) => `${producto.id}) ${producto.descripcion} $${producto.precio}`);
     //Muestro a el usuario todos los productos disponibles
     eleccion = Number(prompt(`Elije el numero del producto que quieras comprar:\n${todosLosProductos.join("\n")}`));
     //bucle para solo recibir un numero del 1 al 6
     while (!(eleccion > 0 && eleccion <= 6)) {
       alert(`Opcion invalida. Reintenta`)
       eleccion = Number(prompt(`Elije el numero del producto que quieras comprar:\n${todosLosProductos.join("\n")}`))
     }
     if (eleccion > 0 && eleccion <= 6) {
       switch (eleccion) {
         case 1:
          agregarACarrito(microAmd5)
           break;
         case 2:
          agregarACarrito(microAmd7)
           break;
         case 3:
          agregarACarrito(microCoreI5)
           break;
         case 4:
          agregarACarrito(gabineteRaidmax)
           break;
         case 5:
          agregarACarrito(gabineteThyphoon)
           break;
         case 6:
          agregarACarrito(gabineteBlanco)
           break;
         default:
          alert("ERROR");
           break;
       }
     }
   } else {
     alert(`Adios, vuelve pronto`)
     break;
   }
   buyAgain = confirm(`¿Quieres seguir comprando?`);
   (buyAgain)
   ? buyAgain
   : carrito.forEach((carritoFinal) => {
    console.log(`- producto: ${carritoFinal.descripcion} \n- precio: $${carritoFinal.precio} \n- cantidad: ${carritoFinal.cantidad}`);
    buyAgain = false;
  })
 } while (buyAgain);
