
//Funcion para agregar producto a carrito
const agregarProductoACarrito = (id) => {
    let contadorDeCompras = document.getElementById("cantidadDeCompras");

    let producto = PRODUCTOS.find(prod => prod.id === id)
    let productoDelCarrito = carrito.find(prod => prod.id === producto.id);
    if (productoDelCarrito) {
      
        if(productoDelCarrito.stock < 0) {
            alert(`No hay mas stock del producto`)
            productoDelCarrito.cantidad

        } else {
            productoDelCarrito.cantidad++;
            productoDelCarrito.stock--
        }
        //podria poner aca productoDelCarrito.stock-- ?? probe y no funciona
        //console.log(productoDelCarrito.stock);
        //intento que imprima el nuevo stock pero no me sale(productoDelCarrito.stock).innerText = productoDelCarrito.stock
        contadorDeCompras.innerText++
        
        console.log(carrito);
    } else {
        contadorDeCompras.innerText++;
        carrito.push(producto);
        //intento descontar el stock con el dom pero no me sale
        (producto.stock).innerText = producto.stock--
        console.log(carrito);
    }
};

//renderizar productos agregados al carrito
const imprimirProductosDelCarrito = () => {

};

