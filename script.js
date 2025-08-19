let tamanhoFonte = 16;

function aumentarFonte() {
  tamanhoFonte += 2;
  document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
  if (tamanhoFonte > 10) {
    tamanhoFonte -= 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  }
}

function toggleContraste() {
  document.body.classList.toggle("contraste");
}

// botão para abrir/fechar painel
const btn = document.getElementById("acessibilidade-btn");
const painel = document.getElementById("painel-acessibilidade");

btn.addEventListener("click", () => {
  painel.classList.toggle("hidden");
});
