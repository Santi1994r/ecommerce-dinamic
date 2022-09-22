//Funcion para agregar producto a carrito
const agregarProductoACarrito = (id) => {
    let contadorDeCompras = document.getElementById("cantidadDeCompras");
    let producto = PRODUCTOS.find(prod => prod.id === id);
    let productoDelCarrito = carrito.find(prod => prod.id === producto.id);
    if (productoDelCarrito) {

        if (productoDelCarrito.stock === 0) {
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
    imprimirProductosDelCarrito();
    mostrarTotalDelCarrito();
};

//Funcion para mostrar la suma de todos los productos del carrito cuando se le da click a finalizar compra
const mostrarTotalDelCarrito = () => {
    let imprimirTotalDelCarrito = document.getElementById("imprimirTotalDelCarrito");
    const buttonFinalizarCompra = document.getElementById("finalizarCompra").addEventListener("click", () => {
        totalDeCompra();
    });
};

//Funcion para calcular el total de los productos del carrito
const totalDeCompra = () => {
    const total = carrito.reduce((acc, elem) => acc + elem.precio * elem.cantidad, 0);
    //imprimirProductosDelCarrito = total.innerText;
    alert(`El total de la compra es de ${total}`);
  };

const productoDelCarrito = document.getElementById("productoDelCarrito");
const divContainer = document.createElement("div");
divContainer.classList.add("row");
divContainer.classList.add("row-cols-1");
divContainer.classList.add("row-cols-md-3");
divContainer.classList.add("g-3");

//renderizar productos agregados al carrito
const imprimirProductosDelCarrito = () => {
    const botonDeCarrito = document.getElementById("buttonCarritoJS").addEventListener("click", () => {
        divContainer.innerText = "";
        productoDelCarrito.append(divContainer);
        carrito.forEach((prod, index) => {
            const card = document.createElement("div");
            card.classList.add("col");
            card.innerHTML = `
            <div class="card w-100">
                      <img src="${prod.imagen}" class="w-100" alt="tu mundo digital">
                      <div class="card-body">
                        <h5 class="card-title h6 text-dark">${prod.descripcion}</h5>
                        <p class="text-dark h6">
                          Cantidad: <span>${prod.cantidad}</span>
                        </p>
                        <button type="button" class="btn btn-danger btn-sm offset-sm-4">Eliminar</button>
                      </div>
            </div>`
        
            divContainer.append(card);
            card.querySelector("button").addEventListener("click", () => {
                alert("Producto eliminado")
            });
        });
        
    });
};