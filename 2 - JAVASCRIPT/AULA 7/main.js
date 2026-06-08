const botaoModoEscuro = document.getElementById("btn");
const body = document.body;
const titulo = document.querySelector("h1");
const paragrafo = document.getElementById("text");

if (botaoModoEscuro) {
  botaoModoEscuro.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const darkMode = body.classList.contains("dark-mode");

    botaoModoEscuro.setAttribute(
      "aria-label",
      darkMode ? "Ativar modo claro" : "Ativar modo escuro"
    );

    titulo.textContent = darkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro";
    paragrafo.textContent = darkMode
      ? "O modo escuro está ativo agora."
      : "O modo claro está ativo agora.";
    botaoModoEscuro.textContent = darkMode
      ? "Ativar Modo Claro"
      : "Ativar Modo Escuro";
  });
}
