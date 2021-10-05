let formulario = document.querySelector(".formulario");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let password = document.getElementById("password");
let boton = document.getElementById("button");




let errorNombreP = document.getElementById("errorNombreP");
let errorApellidoP = document.getElementById("errorApellidoP");
let errorPassP = document.getElementById("errorPassP");


formulario.addEventListener("submit", function(e){
    e.preventDefault()

    let errorName = [];
    let errorApellido = [];
    let errorPass = [];

    let key = false;





    if (nombre.value === "" || nombre.value === null){
        errorName.push("Ingresa un nombre de usuario");
        key = true
    }

    else if (nombre.value.length < 3){
        errorName.push("Ingresa un nombre mas largo");
        key = true;
    }

    else {
        localStorage.setItem("nombreUsuario", nombre.value)
    }



    if (apellido.value === "" || apellido.value === null){
        errorApellido.push("Ingresa un apellido");
        key = true;
    }

    else if (apellido.value.length < 3){
        errorApellido.push("Ingresa un apellido mas largo");
        key = true;
    }





    if (password.value === "" || password.value === null){
        errorPass.push("Ingresa una contraseña");
        key = true;
    }
    else if (password.value.length < 3){
        errorPass.push("Ingresa una contraseña de mas de 3 caracteres");
        key = true;
    }

    else{
        localStorage.setItem("usuarioContraseña", password.value);
    }
    



    if (key){
        errorNombreP.innerHTML = errorName.join(" ");
        errorApellidoP.innerHTML = errorApellido.join(" ");
        errorPassP.innerHTML = errorPass.join(" ");
    }


    else {
        alert("Formulario enviado")
        formulario.submit();
        window.location.replace("login.html")
    }
})