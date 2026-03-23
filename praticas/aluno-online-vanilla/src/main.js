import './style.css'

const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('button');

botao.addEventListener("click", function (e) {
    const emailErro = document.querySelector("#emailErro");
    const senhaErro = document.querySelector("#senhaErro");

    emailErro.textContent = '';
    senhaErro.textContent = '';

    if (email.value == "" || senha.value == "") {
        emailErro.textContent = "O campo de e-mail é obrigatório.";

        if (senha.value == "") {
            senhaErro.textContent = "O campo de senha é obrigatório.";
            return;
        }
        return;

    }

    if (senha.value == "") {
        senhaErro.textContent = "O campo de senha é obrigatório.";
        return;
    }

    else {
        window.location.href = "/index.html"
    }

});