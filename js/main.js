function validar() {

	function nombre(){
		var nombre = document.getElementById("name").value;

		if(nombre == " " || nombre == undefined || nombre.length == 0){
		//validar que nombre no este vacio 
		alert("Error, debe ingresar nombre");
	}else if(nombre.charAt(0) != nombre.charAt(0).toUpperCase()){
 		//validar que el primer caracter sea mayuscula
 		alert("Error, la primera letra debe ser mayuscula");
 	}else if(/[0-9]/.test(nombre)){
 			//validar que sean solo letras
 			alert("No debe ingresar numero");
 			// tambien se podria validar que no fuera un nombre con una expresion regular /[0-9]/.test(nombre)  (es mas efectivo)    OPCION con else if(!isNaN(nombre))
 		}else{
 			alert("Nombre ingresado correctamente");
 		}
 	}
 	nombre();

 	function password(){
 		var contrasenia = document.getElementById("input-password").value;

 		if(contrasenia == " " || contrasenia == undefined || contrasenia.length == 0){
		//validar que contrasenia no este vacio 
		alert("Error, debe ingresar contraseña");
	}else if(contrasenia === "1234" || contrasenia === "password"){
		// validar que la contrasenia no sea la palabra password ni los numeros 1234
		alert("La contraseña no debe ser: password ni 1234");
	}else if(contrasenia.length < 6){
		// valida que la longitud de la contrasenia se mayor a 6 caracteres
		alert("Debe ingresar una contraseña con un minimo de 6 caracteres");
	}else{
		alert("Password ingresado correctamente");
	}
}
password();

function opciones(){
	var seleccion = document.getElementsByTagName("select");
	//tambien se puede hacer con el nombre de la clase, en este caso seria (form-control en la posicion 2)
	//var seleccion = document.getElementsByClassName("form-control")[2];
	for(var i = 0; i < seleccion.length; i++){
		// valida que el usuario elija una opcion 
		if(seleccion[i].value == "0"){
			alert("Debe elegir un jugo");
		}
	}
}
opciones();
}


