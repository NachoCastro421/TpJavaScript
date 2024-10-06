const formulario = document.getElementById('miFormulario');
const correoInput = document.getElementById('miCorreo');
const emailDisplay = document.getElementById('emailDisplay');


function mostrarCorreoGuardado() {
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        emailDisplay.innerHTML = `<p>Correo guardado: ${correoGuardado}</p><button id="eliminarBtn">Eliminar</button>`;
        document.getElementById('eliminarBtn').addEventListener('click', function() {
            localStorage.removeItem('correo');
            emailDisplay.innerHTML = '';
        });
    }
}

// Añadir un evento de envío al formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    const correo = correoInput.value;
    localStorage.setItem('correo', correo);
    mostrarCorreoGuardado();
    correoInput.value = ''; // Limpiar el campo de correo
});

// Mostrar el correo guardado al cargar la página
mostrarCorreoGuardado();
