fetch("../json/stock.json")
    .then(response => response.json())
    .then(data => {
        const $renderCards = document.getElementById("renderCards");
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("row");
        cardContainer.classList.add("row-cols-1");
        cardContainer.classList.add("row-cols-md-3");
        cardContainer.classList.add("g-4");
        cardContainer.classList.add("my-3");
        data.forEach((producto) => {
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
                (producto.stock === 0) ?
                Swal.fire({
                    icon: 'error',
                    title: 'No hay mas stock del producto',
                }): Swal.fire({
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
    });