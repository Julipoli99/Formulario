let formulario = document.querySelector(".formulario");
let email = document.getElementById("email");
let password = document.getElementById("password");
let boton = document.getElementById("button");
let iconoX = document.getElementById("iconoX");
let iconoX2 = document.getElementById("iconoX2");



let errorEmailP = document.getElementById("errorEmailP");
let errorPassP = document.getElementById("errorPassP");



formulario.addEventListener("submit", function(e){
    e.preventDefault()


    let errorEmail = [];
    let errorPass = [];

    let key = false;



    //          ***EMAIL***         //

    if (email.value === "" || email.value === null){
        errorEmail.push("Ingresa un correo electronico");
        key = true;
        iconoX.innerHTML = "<i class = 'fas fa-times'></i>";
        iconoX.style.color = "crimson";
        iconoX.style.paddingLeft = "5px";
    }

    else if (email.value !== localStorage.getItem("usuarioEmail")){
        errorEmail.push("El email que ingresaste no se encuentra registrado");
        key = true;
        iconoX.innerHTML = "<i class = 'fas fa-times'></i>";
        iconoX.style.color = "crimson";
        iconoX.style.paddingLeft = "5px";
    }

    else {
        iconoX.innerHTML = "<i class = 'fas fa-check'></i>";
        iconoX.style.color = "lightgreen";
        iconoX.style.paddingLeft = "5px";
    }

    



    //          ***PASSWORD***          //

    
    if (password.value === null || password.value === ""){
        errorPass.push("Ingresa una contraseña");
        key = true;
        iconoX2.innerHTML = "<i class = 'fas fa-times'></i>";
        iconoX2.style.color = "crimson";
        iconoX2.style.paddingLeft = "5px";
    }
    

    else if (password.value !== localStorage.getItem("usuarioContraseña")){
        errorPass.push("Contraseña invalida");
        key = true;
        iconoX2.innerHTML = "<i class = 'fas fa-times'></i>";
        iconoX2.style.color = "crimson";
        iconoX2.style.paddingLeft = "5px";
    }

    else {
        iconoX2.innerHTML = "<i class = 'fas fa-check'></i>";
        iconoX2.style.color = "lightgreen";
        iconoX2.style.paddingLeft = "5px";
    }

    
    
    
    //          ***ERRORES***           //

    
    if (key){
        errorEmailP.innerHTML = errorEmail.join(" ");
        errorPassP.innerHTML = errorPass.join(" ");
    }



    //          ***ENVIAR FORMULARIO***          //

    else{
        errorEmailP.innerText = "";
        errorPassP.innerText = "";

        //LE DOY UN USO "ASINCRONO" PARA QUE, AL LOGUEARSE, SE BORREN LOS MENSAJES DE ERROR Y FIGURE EL TILDE VERDE//
        setTimeout(() =>{
            alert("Ingreso exitoso, bienvenido")
        formulario.submit();
        window.location.replace("http://www.google.com")
        }, 1)
        
    }
})