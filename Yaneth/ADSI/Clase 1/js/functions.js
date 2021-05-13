console.log("Hola desde Javascript");
// Variables 
let saludo = "Hola Mundo!"
console.log(saludo)

let dia = 7
console.log(dia)
// Crear funcion estandar

function nombreFuncion() {

}
// Funcion saludo 
function funcionSaludo() {
	let saludo = "Hola desde la funcion"
	console.log(saludo)
	document.getElementById("ver").innerHTML = saludo
}
// Funcion Info Mascota
function funcionMascota(){
	let nombreMascota = "Dante"
	let edadMascota = 2
	let direccion = "Clle 2 - Pastelito"
	document.getElementById("ver1").innerHTML = `${nombreMascota} </br> ${edadMascota} </br> ${direccion}`
}
/* Segunda función: Información personal: nombre, edad, direccion y celular */
function userInformation(){
	let userName = "Darwin"
	let userAge = 17
	let userMail = "Clle Pokemon"
	let userPhone = 3117663243
	document.getElementById("ver2").innerHTML = `${userName} </br> ${userAge} </br> ${userMail} </br> ${userPhone}`
}
/* Tercer función: Información mascota */
function userPett(){
	let petName = "Leonidas"
	let petAge = 480
	let petDescription = "king of Sparta"
	document.getElementById("ver3").innerHTML = `${petName} </br> ${petAge} A.C </br> ${petDescription}`
}
/* Cuarta función: Información serie favorita */
function userSerie() {
	let serieName = "Grimm"
	let serieSeasons = 6
	let serieDescription = "Monster Hunter"
	document.getElementById("ver4").innerHTML = `${serieName} </br> ${serieSeasons} </br> ${serieDescription}`
}