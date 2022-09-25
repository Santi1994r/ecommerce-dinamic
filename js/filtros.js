const filtrar = (index) => {
    switch (index) {
        case 0:
            mostrarTodo;
            break;
        case 1:
            funcionParaFiltrar(index)
            alert("Microprocesadores")
            break;
        case 2:
            alert("Gabinetes")
            break;
        case 3:
            alert("Discos SSD")
            break;
        case 4:
            alert("Discos HDD")
            break;
        case 5:
            alert("Fuentes")
            break;
        default:
            alert("error")
            break;
    }
};
const funcionParaFiltrar = (indice) => {
    const filteredProducts = FILTROS.find((elem, index) => index === indice);

    const filtrarStock = PRODUCTOS.filter(el => el === PRODUCTOS.includes(filteredProducts));
    console.log(filtrarStock);
}

const renderizarFiltros = () => {
    const filtrosContainer = document.getElementById("filtrosContainer");
    const $ul = document.createElement("ul");
    $ul.classList.add("d-flex");
    $ul.classList.add("flex-column");
    $ul.classList.add("justify-content-start");
    filtrosContainer.append($ul);
    FILTROS.forEach((filtro, index) => {
        const $li = document.createElement("li");
        $li.classList.add("text-light");
        $li.classList.add("my-2");

        $li.innerHTML = `
        <a href="#">${filtro}</a>
        `;
        $ul.append($li);
        $li.querySelector("a").addEventListener("click", () => {
            filtrar(index)
        });
    });

};
renderizarFiltros();