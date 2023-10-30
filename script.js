function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;
    const mensaje = document.getElementById("mensaje").value;

    let errores = false;

    if (nombre.length === 0 || nombre.length > 30) {
        document.getElementById("nombreError").textContent = "Obligatorio llenar con datos correctos";
        errores = true;
    } else {
        document.getElementById("nombreError").textContent = "";
    }

    if (email.length > 0 && (email.length > 20 || email.indexOf("@") === -1)) {
        document.getElementById("emailError").textContent = "";
        errores = true;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (edad < 18 || edad >= 100) {
        document.getElementById("edadError").textContent = "Obligatorio llenar con datos correctos";
        errores = true;
    } else {
        document.getElementById("edadError").textContent = "";
    }

    if (mensaje.length === 0 || mensaje.length > 200) {
        document.getElementById("mensajeError").textContent = "Obligatorio llenar con datos correctos";
        errores = true;
    } else {
        document.getElementById("mensajeError").textContent = "";
    }

    if (!errores) {
        document.getElementById("nombreMostrado").textContent = nombre;
        document.getElementById("emailMostrado").textContent = email;
        document.getElementById("edadMostrada").textContent = edad;
        document.getElementById("mensajeMostrado").textContent = mensaje;

        document.getElementById("myForm").style.display = "none";
        document.getElementById("resultado").style.display = "block";
    }
}

document.getElementById("enviar").addEventListener("click", validarFormulario);
