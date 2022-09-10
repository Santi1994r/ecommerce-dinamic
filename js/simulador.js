
/* //Simulador de compras con descuentos dependiendo de la cantidad. si lleva 2 paga lo mismo y si lleva 3 se le hace el 40% del total.
let nombre = prompt(`Bienvenido a "Tu Mundo Digital". ¿Como te llamas?`);
let queDispositivoEs = "";
let cantidad = 0;
let precio = 0;
let totalConDescuento = 0;
let totalDeCuenta = (precio, cantidad) => precio * cantidad;

do {
    
    queDispositivoEs = Number(prompt(`Esta es la parte de ventas. \nIngresa de que dispositivo quieres comprar \n 1-celular samsung($45000) \n 2-tablet samsung($35000) \n 3-pc gamer($110000) \n 4-notebook ryzen 5($90000) \n 5-tv 46"($130000)`));
    switch (queDispositivoEs) {
        case 0:
            alert("No puedes ingresar un mensaje vacio");
            //Porque aca si pongo continue en vez de break no hace lo mismo que el default que autocamicamente me vuelve a mostrar el msj de la linea 9
            break;
        case 1:
            precio = 45000;
            cantidad = Number(prompt("¿Cuantos celulares quieres comprar?"));
            console.log(totalDeCuenta(precio,cantidad))
            if (cantidad >= 3) {
                totalConDescuento = totalDeCuenta(precio, cantidad) - (totalDeCuenta(precio, cantidad) * 0.4)
                alert(`Al comprar 3 o mas celulares obtienes un descuento del 40%. Tu elejiste ${cantidad} celulares y con esto tu subtotal es de ${totalDeCuenta(precio, cantidad)} y el Total es ${totalConDescuento}`);
            } else if (cantidad < 3 && cantidad > 0) {
                alert(`El total de su compra es de ${totalDeCuenta(precio, cantidad)} pesos llevando ${cantidad} celular/es`);
            } else {
                alert("La cantidad ingresada no es correcta");
            }
            break;
        case 2:
            precio = 35000;
            cantidad = Number(prompt("¿Cuantas tablets quieres comprar?"));
            console.log(totalDeCuenta(precio,cantidad))
            if (cantidad >= 3) {
                totalConDescuento = totalDeCuenta(precio, cantidad) - (totalDeCuenta(precio, cantidad) * 0.4)
                alert(`Al comprar 3 o mas tablets obtienes un descuento del 40%. Tu elejiste ${cantidad} tablet y con esto tu subtotal es de ${totalDeCuenta(precio, cantidad)} y el Total es ${totalConDescuento}`);
            } else if (cantidad < 3 && cantidad > 0) {
                alert(`El total de su compra es de ${totalDeCuenta(precio, cantidad)} pesos llevando ${cantidad} tablet/s`);
            } else {
                alert("La cantidad ingresada no es correcta");
            }
            break;
        case 3:
            precio = 110000;
            cantidad = Number(prompt("¿Cuantas pc quieres comprar?"));
            console.log(totalDeCuenta(precio,cantidad))
            if (cantidad >= 3) {
                totalConDescuento = totalDeCuenta(precio, cantidad) - (totalDeCuenta(precio, cantidad) * 0.4)
                alert(`Al comprar 3 o mas pc obtienes un descuento del 40%. Tu elejiste ${cantidad} pc y con esto tu subtotal es de ${totalDeCuenta(precio, cantidad)} y el Total es ${totalConDescuento}`);
            } else if (cantidad < 3 && cantidad > 0) {
                alert(`El total de su compra es de ${totalDeCuenta(precio, cantidad)} pesos llevando ${cantidad} pc`);
            } else {
                alert("La cantidad ingresada no es correcta");
            }
            break;
        case 4:
            precio = 90000;
            cantidad = Number(prompt("¿Cuantos notebook quieres comprar?"));
            console.log(totalDeCuenta(precio,cantidad))
            if (cantidad >= 3) {
                totalConDescuento = totalDeCuenta(precio, cantidad) - (totalDeCuenta(precio, cantidad) * 0.4)
                alert(`Al comprar 3 o mas notebook obtienes un descuento del 40%. Tu elejiste ${cantidad} notebook y con esto tu subtotal es de ${totalDeCuenta(precio, cantidad)} y el Total es ${totalConDescuento}`);
            } else if (cantidad < 3 && cantidad > 0) {
                alert(`El total de su compra es de ${totalDeCuenta(precio, cantidad)} pesos llevando ${cantidad} notebook`);
            } else {
                alert("La cantidad ingresada no es correctaaaaaa");
            }
            break;
        case 5:
            precio = 130000;
            cantidad = Number(prompt("¿Cuantas tv quieres comprar?"));
            console.log(totalDeCuenta(precio,cantidad))
            if (cantidad >= 3) {
                totalConDescuento = totalDeCuenta(precio, cantidad) - (totalDeCuenta(precio, cantidad) * 0.4)
                alert(`Al comprar 3 o mas tv obtienes un descuento del 40%. Tu elejiste ${cantidad} tv y con esto tu subtotal es de ${totalDeCuenta(precio, cantidad)} y el Total es ${totalConDescuento}`);
            } else if (cantidad < 3 && cantidad > 0) {
                alert(`El total de su compra es de ${totalDeCuenta(precio, cantidad)} pesos llevando ${cantidad} tv`);
            } else {
                alert("La cantidad ingresada no es correcta");
            }
            break;
        default:
            alert("La opción ingresada no es correcta.");
            break;
    }
    queDispositivoEs = confirm(`¿Quieres seguir comprando ${nombre}?`);

} while (queDispositivoEs); */



//indexOf  ver bien como usarlo

 /*  const isInCart = (item) => carrito.some((producto) => producto.id === item.id);

 const addToCart = (product) => {
   if (isInCart(product)) {
     alert("El producto " + product.nombre + " ya está en el carrito!");
     //Si hubiera opcion de cantidad: sumar 1
   } else {
     alert("Elegiste: " + product.nombre);
     carrito.push(product);
   }
 }; */
