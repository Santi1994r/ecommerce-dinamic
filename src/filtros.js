import { agregarProductoACarrito } from "./carrito.js";
import { PRODUCTOS, FILTROS } from "./stock.js";
import { obtenerCarritoDeStoraje } from "./storaje.js";


const filtrar = (filtro, index) => {
    console.log(filtrarPorCategoria());
    (index === 0)
    ? reimprimirProdFilt(PRODUCTOS)     
    : reimprimirProdFilt(filtrarPorCategoria(filtro)); 
};

//funcion para "reimprimir" los productos filtrados
const reimprimirProdFilt = (array) => {
    PRODUCTOS.innerText = "";
    const $renderCards = document.getElementById("renderCards");
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("row");
    cardContainer.classList.add("row-cols-1");
    cardContainer.classList.add("row-cols-md-3");
    cardContainer.classList.add("g-4");
    cardContainer.classList.add("my-3");
    $renderCards.innerText = "";
    array.forEach((producto) => {
        let card = document.createElement("div");
        card.classList.add("col");
        card.innerHTML = `
                          
                            <div class="card h-100 shadowYellow">
                              <img src="${producto.imagen}" class="card-img-top" alt="tu mundo digital">
                              <div class="card-body">
                                <h5 class="card-title">${producto.descripcion}</h5>
                                <p class="card-text">$${producto.precio}</p>
                                <p class="card-text">Stock disponible: ${producto.stock}</p>
                                <p class="card-text">Impuesto Incluido</p>
                                <div class="input-group mb-3 w-75">
                                </div>
                                <button type="button" class="btn btn-warning offset-3 w-50" id="${producto.id}" >Agregar al Carrito</button>
                              </div>
                            </div>
                          `

        $renderCards.append(cardContainer);
        cardContainer.append(card);


        card.querySelector("button").addEventListener("click", () => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${producto.descripcion} \nAgregado al carrito`,
                showConfirmButton: false,
                timer: 1400
            })
        });
        card.querySelector("button").addEventListener("click", () => {
            agregarProductoACarrito(producto.id);
        });
    });
};

//funcion para filtrar los productos seleccionados. 
const filtrarPorCategoria = (filtro) => {
    const productosFiltrados = PRODUCTOS.filter(prod => prod.categoria === filtro);
    return productosFiltrados;
};

const renderizarFiltros = () => {
    const $filtrosContainer = document.getElementById("filtrosContainer");
    const $ul = document.createElement("ul");
    $ul.classList.add("filtroMobile");
    $filtrosContainer.append($ul);
    FILTROS.forEach((filtro, index) => {
        const $li = document.createElement("li");
        $li.classList.add("text-light");
        $li.classList.add("my-2");
        $li.innerHTML = `
        <a href="#">${filtro}</a>
        `;
        $ul.append($li);
        $li.querySelector("a").addEventListener("click", () => {
            filtrar(filtro, index);
        });
    });
};

renderizarFiltros();

