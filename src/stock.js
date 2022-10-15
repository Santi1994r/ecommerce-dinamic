import { obtenerCarritoDeStoraje } from "./storaje.js";


 let carrito = obtenerCarritoDeStoraje() || [];

 const FILTROS = [
  "Todos",
  "Microprocesadores",
  "Gabinetes",
  "Discos Solidos",
  "Discos Duros",
  "Fuentes",
  "Monitores",
  "Discos Externos",
  "Memorias RAM PC"
];

export { FILTROS, carrito };