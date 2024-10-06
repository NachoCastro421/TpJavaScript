
const campText = document.getElementById("miCampoTexto");
const deshabilitarBoton = document.getElementById('deshabilitarBoton');
    const habilitarBoton = document.getElementById('habilitarBoton');

    // Añadir un evento de clic al botón de deshabilitar
    deshabilitarBoton.addEventListener('click', function() {
        campText.disabled = true;
    });

    // Añadir un evento de clic al botón de habilitar
    habilitarBoton.addEventListener('click', function() {
        campText.disabled = false;
    });