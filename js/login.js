let formulario = document.querySelector(".formulario");
let nombre = document.getElementById("nombre");
let password = document.getElementById("password");
let boton = document.getElementById("button");



let errorNombreP = document.getElementById("errorNombreP");
let errorPassP = document.getElementById("errorPassP");



formulario.addEventListener("submit", function(e){
    e.preventDefault()


    let errorName = [];
    let errorPass = [];

    let key = false;



    if (nombre.value !== localStorage.getItem("nombreUsuario")){
        errorName.push("Nombre de usuario invalido");
        key = true
    }

    



    if (password.value !== localStorage.getItem("usuarioContraseña")){
        errorPass.push("Contraseña invalida");
        key = true;
    }
    else if (password.value === "" || password.value === null){
        errorPass.push("Ingresa una contraseña")
    }
    


    
    if (key){
        errorNombreP.innerHTML = errorName.join(" ");
        errorPassP.innerHTML = errorPass.join(" ");
    }


    else{
        alert("Ingreso exitoso, bienvenido")
        formulario.submit();
        window.location.replace("http://www.google.com")
    }
})