function toggleText(element) {
    var texto = element.querySelector('.texto-oculto');

    if (window.getComputedStyle(texto).display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}
