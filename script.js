document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Evitar recargar la página

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    let errorNombre = document.getElementById("errorNombre");
    let errorEmail = document.getElementById("errorEmail");
    let errorMensaje = document.getElementById("errorMensaje");
    let mensajeExito = document.getElementById("mensajeExito");

    // Resetear mensajes
    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorMensaje.textContent = "";
    mensajeExito.textContent = "";

    let valido = true;

    // Validación de nombre
    if (nombre === "") {
        errorNombre.textContent = "Por favor ingresa tu nombre.";
        valido = false;
    }

    // Validación de email
    if (email === "") {
        errorEmail.textContent = "El correo es obligatorio.";
        valido = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        errorEmail.textContent = "Correo inválido.";
        valido = false;
    }

    // Validación de mensaje
    if (mensaje === "") {
        errorMensaje.textContent = "Escribe un mensaje.";
        valido = false;
    }

    // Si todo está correcto
    if (valido) {
        mensajeExito.textContent = "¡Formulario enviado con éxito!";
        
        // Limpia los campos
        document.getElementById("contactForm").reset();
    }
});
