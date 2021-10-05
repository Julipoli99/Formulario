let formulario = document.querySelector(".formulario");
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let password = document.getElementById("password");
let boton = document.getElementById("button");




let errorNombreP = document.getElementById("errorNombreP");
let errorEmailP = document.getElementById("errorEmailP");
let errorPassP = document.getElementById("errorPassP");


formulario.addEventListener("submit", function(e){
    e.preventDefault()

    let errorName = [];
    let errorEmail = [];
    let errorPass = [];
    let regexEmail =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    let key = false;





    if (nombre.value === "" || nombre.value === null){
        errorName.push("Ingresa un nombre de usuario");
        key = true
    }

    else if (nombre.value.length < 3){
        errorName.push("Ingresa un nombre mas largo");
        key = true;
    }




    if (email.value === "" || email.value === null){
        errorEmail.push("Ingresa un email");
        key = true;
    }

    else if (!regexEmail.test(email.value)){
        errorEmail.push("Ingresa un email válido");
        key = true;
    }


    else {
        localStorage.setItem("usuarioEmail", email.value)
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
        errorEmailP.innerHTML = errorEmail.join(" ");
        errorPassP.innerHTML = errorPass.join(" ");
    }


    else {
        alert("Formulario enviado")
        formulario.submit();
        window.location.replace("login.html")
    }
})