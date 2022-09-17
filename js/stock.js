//clase constructora de objetos
 class Producto {
   constructor(id, descripcion, stock, precio, imagen) {
     this.id = id;
     this.descripcion = descripcion;
     this.stock = stock;
     this.precio = precio;
     this.imagen = imagen;
   }
 };

 //objetos instanciados
 const microAmd5 = new Producto(1, "MICROPROCESADOR CPU AMD RYZEN 5 5600 6/12 ZEN3", 10, 43900, "../images/ryzen5.png");
 const microAmd7 = new Producto(2, "MICROPROCESADOR AMD RYZEN 7 5700X 8/16 4.6GHZ S/G S/COOLER ZEN3", 6, 58900, "../images/ryzen7.png");
 const microCoreI5 = new Producto(3, "MICROPROCESADOR INTEL CORE I5 10600K 4.8GHZ 6/12 12MB LGA1200 BULK", 8, 32900, "../images/corei5.png");
 const gabineteRaidmax = new Producto(4, "GABINETE RAIDMAX F01 RGB 4 FAN INCLUIDOS RGB TEMPLADO", 5, 18900, "../images/gabineteRGB.png");
 const gabineteThyphoon = new Producto(5, "GABINETE GAMEMAX TYPHOON COC FAN ARGB", 7, 11900, "../images/gabineteThyphoon.png");
 const gabineteBlanco = new Producto(6, "GABINETE THERMALTAKE H200 TG RGB SNOW", 6, 18900, "../images/gabineteBlanco.png");

 const PRODUCTOS = [
   microAmd5,
   microAmd7,
   microCoreI5,
   gabineteRaidmax,
   gabineteThyphoon,
   gabineteBlanco
 ];

 const carrito = [];