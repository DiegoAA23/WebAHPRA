document.getElementById('form-contacto').addEventListener('submit', function (event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var tipo = document.getElementById('tipomensaje').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '') {
        alert('Por favor, introduce tu nombre');
        document.getElementById('nombre').focus();
        return false;
    }

    if (correo === '') {
        alert('Por favor, introduce tu correo electrónico');
        document.getElementById('correo').focus();
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(correo)) {
        alert('Por favor, introduce un correo electrónico válido');
        document.getElementById('correo').focus();
        return false;
    }

    if (tipo === '.') {
        alert('Por favor, selecciona el tipo de dispositivo');
        document.getElementById('dispositivo').focus();
        return false;
    }

    if (mensaje === '') {
        alert('Por favor, introduce un mensaje');
        document.getElementById('mensaje').focus();
        return false;
    }


    alert('El formulario se ha enviado exitosamente');
    document.getElementById('form-contacto').reset();
});
