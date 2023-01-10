const sendButton = document.querySelector('#sendButton');
const inputs = document.querySelectorAll('input');
const fullName = document.getElementById('full-name');
const email = document.getElementById('e-mail');
const textArea = document.getElementById('textForWin');

function preventDefault(event) {
    event.preventDefault();
}

function sendOk() {
    if (fullName.value.length > 0 && fullName.value.length < 40 && email.value.length > 0 && email.value.length < 50 && textArea.value.length > 0) {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    } else { alert('Dados inválidos') }
}

sendButton.addEventListener('click', sendOk);
//sendButton.addEventListener('click', preventDefault);
