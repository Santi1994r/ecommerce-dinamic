
//Funcion para guardar en el local storaje
const guardarCarritoEnStoraje = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

//Funcion para obtener la informacion alojada en el storaje
const obtenerCarritoDeStoraje = () => {
    const carritoStoraje = JSON.parse(localStorage.getItem("carrito"));
};

export { guardarCarritoEnStoraje , obtenerCarritoDeStoraje }