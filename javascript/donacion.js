function donate() {
    var amount = document.getElementById('amount').value;
    var confirmationMessage = document.getElementById('confirmationMessage');
    
    if (amount > 0) {
        confirmationMessage.innerHTML = '¡Gracias por tu donación de ' + amount + ' USD! 🐾';
    }else {
        confirmationMessage.innerHTML = 'Por favor, ingresa un monto válido.';
    }
}