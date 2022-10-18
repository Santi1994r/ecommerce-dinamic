import {
    carrito
} from "./stock.js";


const thanksForBuying = () => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: `Gracias por tu compra!!`,
        text: 'Vuelve pronto',
        showConfirmButton: false,
        timer: 1200,
    });

};

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

    let btnPay = document.createElement("button");
    btnPay.setAttribute("type", "button");
    btnPay.classList.add("btn", "btn-primary");
    btnPay.textContent = "Pagar";
    div.append(btnPay);
    btnPay.addEventListener("click", thanksForBuying);
};
showDetail();