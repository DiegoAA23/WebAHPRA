function toggleText(element) {
    var texto = element.querySelector('.texto-oculto');

    if (window.getComputedStyle(texto).display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
    console.log('Hola, esto es un mensaje de registro en la consola');

}
