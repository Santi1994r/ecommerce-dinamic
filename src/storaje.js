
const guardarCarritoEnStoraje = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

const obtenerCarritoDeStoraje = () => {
    const carritoStoraje = JSON.parse(localStorage.getItem("carrito"));
    return carritoStoraje;
};
export { guardarCarritoEnStoraje , obtenerCarritoDeStoraje }