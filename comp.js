

let boton= document.getElementsByTagName("button")[0].addEventListener("click",mostrarEdad);

function mostrarEdad(){
	var edad = document.getElementById("Edad").value;

	if(edad==" " || edad<=0  || edad>99){
		alert("Ingresá un número válida!");
	}

	fecha= new Date().getFullYear();
	anio= fecha-edad;
	document.getElementsByTagName("b")[0].textContent=anio;
	
	}
	document.getElementById("Edad").value=" ";

