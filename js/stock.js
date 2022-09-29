import { obtenerCarritoDeStoraje } from "./storaje.js";


//clase constructora de objetos
 class Producto {
   constructor(id, descripcion, stock, precio, imagen, cantidad, categoria) {
     this.id = id;
     this.descripcion = descripcion;
     this.stock = stock;
     this.precio = precio;
     this.imagen = imagen;
     this.cantidad = cantidad;
     this.categoria = categoria;
   }
 };

 //objetos instanciados
 let microAmd5 = new Producto(1, "MICROPROCESADOR CPU AMD RYZEN 5 5600 6/12 ZEN3", 3, 43900, "../images/ryzen5.png", 1, "Microprocesadores");
 let microAmd7 = new Producto(2, "MICROPROCESADOR AMD RYZEN 7 5700X 8/16 4.6GHZ S/G S/COOLER ZEN3", 6, 58900, "../images/ryzen7.png", 1, "Microprocesadores");
 let microCoreI5 = new Producto(3, "MICROPROCESADOR INTEL CORE I5 10600K 4.8GHZ 6/12 12MB LGA1200 BULK", 8, 32900, "../images/corei5.png", 1, "Microprocesadores");
 let gabineteRaidmax = new Producto(4, "GABINETE RAIDMAX F01 RGB 4 FAN INCLUIDOS RGB TEMPLADO", 5, 18900, "../images/gabineteRGB.png", 1, "Gabinetes");
 let gabineteThyphoon = new Producto(5, "GABINETE GAMEMAX TYPHOON COC FAN ARGB", 7, 11900, "../images/gabineteThyphoon.png", 1, "Gabinetes");
 let gabineteSnow = new Producto(6, "GABINETE THERMALTAKE H200 TG RGB SNOW", 6, 18900, "../images/gabineteBlanco.png", 1, "Gabinetes");
 let ssd240gb = new Producto(7, "DISCO SOLIDO SSD 240 GB GIGABYTE SATA III GP-GSTF", 15, 5800, "../images/ssd240gb.png", 1, "Discos Solidos");
 let hdd2tbSeagate = new Producto(8, "DISCO DURO HDD 2TB SEAGATE BARRACUDA SATA III", 8, 10200, "../images/hdd2tbSeagate.png", 1, "Discos Duros");
 let fuenteGamemax600w80plus = new Producto(9, "FUENTE GAMEMAX 600W VP-600 80+ BRONZE RGB", 11, 13490, "../images/fuenteGamemax600w80plus.png", 1, "Fuentes");
 let fuenteGamemax700w = new Producto(10, "FUENTE GAMEMAX 700W VP-600 80+ BRONZE RGB", 7, 13990, "../images/fuenteGamemax700w.png", 1, "Fuentes");
 
 const PRODUCTOS = [
   microAmd5,
   microAmd7,
   microCoreI5,
   gabineteRaidmax,
   gabineteThyphoon,
   gabineteSnow,
   ssd240gb,
   hdd2tbSeagate,
   fuenteGamemax600w80plus,
   fuenteGamemax700w
 ];

 let carrito = obtenerCarritoDeStoraje() || [];

 const FILTROS = [
  "Todos",
  "Microprocesadores",
  "Gabinetes",
  "Discos Solidos",
  "Discos Duros",
  "Fuentes"
];

export { PRODUCTOS, FILTROS, carrito };