let formulario = document.querySelector(".formulario");
let email = document.getElementById("email");
let password = document.getElementById("password");
let boton = document.getElementById("button");



let errorEmailP = document.getElementById("errorEmailP");
let errorPassP = document.getElementById("errorPassP");



formulario.addEventListener("submit", function(e){
    e.preventDefault()


    let errorEmail = [];
    let errorPass = [];

    let key = false;

    if (email.value === "" || email.value === null){
        errorEmail.push("Ingresa un correo electronico");
        key = true;
    }

    else if (email.value !== localStorage.getItem("usuarioEmail")){
        errorEmail.push("El email que ingresaste no esta registrado");
        key = true
    }

    

    

    if (password.value !== localStorage.getItem("usuarioContraseña")){
        errorPass.push("Contraseña invalida");
        key = true;
    }
    
    


    
    if (key){
        errorEmailP.innerHTML = errorEmail.join(" ");
        errorPassP.innerHTML = errorPass.join(" ");
    }


    else{
        alert("Ingreso exitoso, bienvenido")
        formulario.submit();
        window.location.replace("http://www.google.com")
    }
})