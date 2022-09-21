
//Funcion para agregar producto a carrito
const agregarProductoACarrito = (id) => {
    let contadorDeCompras = document.getElementById("cantidadDeCompras");
    let producto = PRODUCTOS.find(prod => prod.id === id);
    let productoDelCarrito = carrito.find(prod => prod.id === producto.id);
    if (productoDelCarrito) {
      
        if(productoDelCarrito.stock === 0) {
            alert(`No hay mas stock del producto`)
        } else {
            productoDelCarrito.cantidad++;
            productoDelCarrito.stock--
            contadorDeCompras.innerText++
        }
        //intento que imprima el nuevo stock pero no me sale(productoDelCarrito.stock).innerText = productoDelCarrito.stock
        console.log(carrito);
    } else {
        contadorDeCompras.innerText++; 
        producto.stock--
        carrito.push(producto);
        console.log(carrito);
    }
};

//renderizar productos agregados al carrito
const imprimirProductosDelCarrito = () => {
    //en proceso
};

