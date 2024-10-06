document.addEventListener('DOMContentLoaded', function() {

    const elementosLista = document.querySelectorAll('#miLista li');

    elementosLista.forEach(function(elemento) {
        elemento.addEventListener('click', function() {
            // Mostrar el texto del elemento <li> en la consola
            console.log(elemento.textContent);
        });
    });

});