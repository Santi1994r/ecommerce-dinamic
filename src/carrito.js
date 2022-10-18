import { guardarCarritoEnStoraje, obtenerCarritoDeStoraje } from "./storaje.js";
import { carrito } from "./stock.js";
import { todosLosProductos } from "./main.js";

let contadorDeCompras = document.getElementById("cantidadDeCompras");
contadorDeCompras.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

//funcion que contiene alerta para consultarle al usuario si esta seguro de finalizar la compra
const areYouSure = () => {
  Swal.fire({
    title: 'Esta seguro/a de que quiere finalizar la compra?',
    text: "No podra volver atras",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Finalizar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Felicidades!',
        'Tu compra se ha realizado con exito',
        'success'
      )
      //ahora al guardar en el storaje este array vacio me lo reemplaza pero me muestra los cambios si yo reinicio la pagina. me pasa lo mismo que con el boton, estoy teniendo ese problema para que se actualize solo.
      guardarCarritoEnStoraje([]);
      contadorDeCompras.innerText = 0;
      console.log(carrito);
      actualizarProductosEnCarrito(obtenerCarritoDeStoraje());
      disableBtnPay();
      console.log(carrito);
    }
  })
};


//Funcion para desabilitar el boton de finalizar compra si no hay nada en el carrito
const disableBtnPay = () => {
  let disableBtnPay = document.getElementById("disableBtnPay");
  disableBtnPay.addEventListener("click", areYouSure);
  console.log(carrito);
  if (carrito.length === 0) {
    disableBtnPay.classList.add("d-none");
  }
};
disableBtnPay();


//Funcion para agregar producto a carrito
const agregarProductoACarrito = (id) => {
  let productoAniadido = todosLosProductos.find((prod) => prod.id === id);
  let productosDelCarrito = carrito.find((prod) => prod.id === productoAniadido.id);
  if (productosDelCarrito) {
    productosDelCarrito.cantidad++;
    contadorDeCompras.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  } else {
    carrito.push(productoAniadido);
    contadorDeCompras.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }
  imprimirProductosDelCarrito();
  guardarCarritoEnStoraje(carrito);
};

//Funcion para eliminar de a uno la cantidad de cada producto
const eliminarProductoDelCarrito = (index) => {
  carrito[index].cantidad--;
  contadorDeCompras.innerText--;
  if (carrito[index].cantidad === 0) {
    carrito[index].cantidad = 1;
    carrito.splice(index, 1);
  }
  disableBtnPay();
  actualizarProductosEnCarrito(carrito);
  guardarCarritoEnStoraje(carrito);
};


//Funcion para calcular el total de los productos del carrito
const totalDeCompra = () => {
  const total = carrito.reduce((acc, elem) => acc + elem.precio * elem.cantidad, 0);
  return total;
};
//prueba con carrito

//dfasfdasdsad  wsadasdsdass  dasdasdas
//Funcion para actualizar productos una vez que vas eliminando
const actualizarProductosEnCarrito = (carr) => {
  divContainer.innerText = "";
  carr.forEach((prod, index) => {
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
        </div>`;

    divContainer.append(card);
    card.querySelector("button").addEventListener("click", () => {
      eliminarProductoDelCarrito(index);
    });
  });
};

const productoDelCarrito = document.getElementById("productoDelCarrito");
const divContainer = document.createElement("div");
divContainer.classList.add("row");
divContainer.classList.add("row-cols-1");
divContainer.classList.add("row-cols-md-3");
divContainer.classList.add("g-3");

//renderizar productos agregados al carrito
const imprimirProductosDelCarrito = () => {
  document.getElementById("buttonCarritoJS").addEventListener("click", () => {
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
            </div>`;

      divContainer.append(card);
      card.querySelector("button").addEventListener("click", () => {
        eliminarProductoDelCarrito(index);
      });
    });
    console.log(carrito);
    disableBtnPay();
  });
};
imprimirProductosDelCarrito();

export { agregarProductoACarrito };
export { carrito };