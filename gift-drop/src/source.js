
let inicial = document.querySelector("#voltar");
inicial.addEventListener('click', function(){
    window.location.href = 'http://127.0.0.1:5500/gift-drop/index.html'
})

let paraOPerfil = document.querySelector("#acessarPerfil");
paraOPerfil.addEventListener('click', function(){
    window.location.href ='http://127.0.0.1:5500/gift-drop/profile.html'
})

var password = document.getElementById('senhaLog');
document.getElementById('acessarPerfil').addEventListener('click', function(){
    localStorage.senhaLog = password.value;

});

const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Esse endereço de Email não é válido!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});
