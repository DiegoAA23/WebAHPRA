document.addEventListener("DOMContentLoaded", function() {
    const preguntas = document.querySelectorAll('.pregunta');

    preguntas.forEach(pregunta => {
        pregunta.addEventListener('click', function() {
            toggleText(this);
        });
    });

    function toggleText(element) {
        const texto = element.querySelector('.texto-oculto');
        texto.classList.toggle('mostrar');
    }
});
