
//Funcion para agregar producto a carrito
const agregarProductoACarrito = (id) => {
    let contadorDeCompras = document.getElementById("cantidadDeCompras");
    let producto = PRODUCTOS.find(prod => prod.id === id)
    let productoDelCarrito = carrito.find(prod => prod.id === producto.id);
    if (productoDelCarrito) {
        productoDelCarrito.cantidad++;
        contadorDeCompras.innerText +=  1;
        console.log(carrito);
    } else {
        contadorDeCompras.innerText = 1;
        carrito.push(producto);
        console.log(carrito);
    }
}

