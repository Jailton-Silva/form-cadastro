document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor insira um e-mail válido.');
        event.preventDefault(); // Prevent form submission
    }
});
  
// Formata numero de telefone
$(document).ready(function () {
    var options = {
        onKeyPress: function (phone, e, field, options) {
            // Checa se o número de dígitos é maior que 14 (incluindo a máscara e o nono dígito)
            var mask = (phone.length > 14) ? '(00) 00000-0000' : '(00) 0000-00009';
            $('#telefoneCelular').mask(mask, options);
        }
    };
    // Aplica a máscara inicial.
    $('#telefoneCelular').mask('(00) 0000-00009', options);
});
  
// Senha
const passwordInput = document.getElementById('new-password');
const confirmInput = document.getElementById('confirm-password');
const showPasswordIcon = document.getElementById('show-password');
const showConfirmPasswordIcon = document.getElementById('show-confirm-password');

showPasswordIcon.addEventListener('click', function() {
    if (passwordInput.type === 'password' && confirmInput.type === 'password') {
        passwordInput.type = 'text';
        confirmInput.type = 'text';
        showPasswordIcon.classList.remove('fa-eye');
        showPasswordIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        confirmInput.type = 'password';
        showPasswordIcon.classList.remove('fa-eye-slash');
        showPasswordIcon.classList.add('fa-eye');
    }
});

const form = document.getElementById('registrationForm');
const newPasswordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const customAlert = document.getElementById('custom-alert');
const alertMessage = document.getElementById('alert-message');
const closeButton = document.getElementById('close-button');

form.addEventListener('submit', function(event) {
    if (newPasswordInput.value !== confirmPasswordInput.value) {
        event.preventDefault();
        displayAlert('As senhas não correspondem!');
    }
});

function displayAlert(message) {
    alertMessage.textContent = message;
    customAlert.style.display = 'flex';

    closeButton.addEventListener('click', function() {
        customAlert.style.display = 'none';
    });
}
