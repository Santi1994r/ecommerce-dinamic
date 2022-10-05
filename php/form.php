<?php

$nombre = $_POST["name"];
$apellido = $_POST["surname"];
$mail = $_POST["email"];        /// lo que esta dentro del post son los name que le puse a cada input
$telefono = $_POST["phone"];
$provincia = $_POST["province"];
$localidad = $_POST["location"];

//lo envio a mi mail personal 

$para = "santiagoruiz9416@gmail.com";
$asunto = "Este email fue enviado desde Urbanos Clothing";

//Funcion
mail($para, $asunto, utf8_decode($telefono));   
//Funcion para reedireccionar al usuario una ves enviado sus datos por el formulario
header("location:exito.html");

?>