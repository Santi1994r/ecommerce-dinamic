import { carrito } from "./stock.js";

const showDetail = () => {
    let purchaseDetail = document.getElementById("detalleDeCompra");
    let div = document.createElement("div");
    div.classList.add("d-flex", "flex-column", "align-items-center");
    purchaseDetail.append(div);

    carrito.forEach(prod => {
        let $ul = document.createElement("ul");
        $ul.classList.add("productosComprados");
        $ul.innerHTML = `
        <li class="text-dark mb-2">${prod.descripcion}</li>
        <li class="text-dark">Cantidad: ${prod.cantidad}</li>
        <li class="text-dark">Subtotal: $${prod.precio * prod.cantidad}</li>
        `
        div.append($ul);

    });
};

showDetail();