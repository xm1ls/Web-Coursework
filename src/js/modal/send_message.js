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

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    showPopup();
    setTimeout(closePopup, 3000);
}

let form = document.getElementById("form");
form.addEventListener('submit', sendMessage);
document.addEventListener("DOMContentLoaded", closePopup);

function showPopup() {
    var popup = document.getElementById("registrationPopup");
    popup.style.display = "block";
    setTimeout(function () {
        popup.style.opacity = "1";
    }, 10);
}

function closePopup() {
    var popup = document.getElementById("registrationPopup");
    popup.style.opacity = "0";
    setTimeout(function () {
        popup.style.display = "none";
    }, 300);
}