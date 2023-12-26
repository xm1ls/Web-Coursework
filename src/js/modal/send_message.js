function sendMessage(event) {
    event.preventDefault();

    let userName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let text = `Name: ${userName}%0AEmail: ${email}%0AMessage: ${message}`;
    let token = '6312280332:AAFoDtPnlOMD6WFGE3sKENGqa6GLZbBBlqI';
    let chat_id = '644929891';

    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    document.querySelector("[data-modal]").classList.toggle("is-hidden");
}

let form = document.getElementById("form");
form.addEventListener('submit', sendMessage);

