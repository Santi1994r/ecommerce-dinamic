
//Funcion para agregar producto a carrito
const agregarProductoACarrito = (id) => {
    let contadorDeCompras = document.getElementById("cantidadDeCompras");
    console.log(contadorDeCompras);
    let producto = PRODUCTOS.find(prod => prod.id === id)
    let productoDelCarrito = carrito.find(prod => prod.id === producto.id);
    if (productoDelCarrito) {
        productoDelCarrito.cantidad++;
        productoDelCarrito.stock--;
        console.log(productoDelCarrito.stock);
        (productoDelCarrito.stock).innerText = productoDelCarrito.stock
        //podria poner aca productoDelCarrito.stock-- ?? probe y no funciona
        contadorDeCompras.innerText +=  contadorDeCompras++;
        console.log(carrito);
    } else {
   
        contadorDeCompras.innerText += contadorDeCompras++;
        carrito.push(producto);
        //intento descontar el stock con el dom pero no me sale
        (producto.stock).innerText = producto.stock--
        console.log(carrito);
    }
}

