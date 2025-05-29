const form = document.querySelector("#form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

//FUNÇÕES DE ESTILO

function setErro(index) {
  campos[index].style.border = "2px solid red";
  spans[index].style.display = "block";
}

function removeErro(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

//FUNÇÕES DE VALIDAÇÕES

function validateName() {
  if (campos[0].value === "") {
    setErro(0);
  } else {
    removeErro(0);
  }
}

function validateEmail() {
  if (campos[1].value === "" || !emailRegex.test(campos[1].value)) {
    setErro(1);
  } else {
    removeErro(1);
  }
}

function validatePassword() {
  if (campos[2].value.length < 8) {
    setErro(2);
  } else {
    removeErro(2);
  }
}

function validateJob() {
  if (campos[3].value === "") {
    setErro(3);
  } else {
    removeErro(3);
  }
}
function validateMensage() {
  if (campos[4].value === "") {
    setErro(4);
  } else {
    removeErro(4);
  }
}

// EVENTO DE ENVIO DE FORMULÁRIO

form.addEventListener("submit", (event) => {
  event.preventDefault();

  validateName();
  validateEmail();
  validatePassword();
  validateJob();
  validateMensage();

  form.submit();
});
