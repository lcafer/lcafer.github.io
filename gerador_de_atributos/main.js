document.addEventListener("DOMContentLoaded", () => {
  // Configura os botões de pontuação
  document.getElementById("btnBaixa").addEventListener("click", () =>
    calcular(66)
  );
  document.getElementById("btnPadrao").addEventListener("click", () =>
    calcular(72)
  );
  document.getElementById("btnAlta").addEventListener("click", () =>
    calcular(78)
  );
  document.getElementById("btnEpica").addEventListener("click", () =>
    calcular(84)
  );
  document
    .getElementById("btnPersonalizado")
    .addEventListener("click", calcularPersonalizado);

  // Configura o botão de toggle de tema
  const toggleThemeBtn = document.getElementById("toggleTheme");
  toggleThemeBtn.addEventListener("click", () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    if (currentTheme === "dark") {
      root.setAttribute("data-theme", "light");
      toggleThemeBtn.textContent = "Tema Escuro";
    } else {
      root.setAttribute("data-theme", "dark");
      toggleThemeBtn.textContent = "Tema Claro";
    }
  });
});

/**
 * Simula a rolagem de dados para calcular os atributos.
 * Cada atributo tem um máximo de 18 pontos, e pontos excedentes são
 * contabilizados separadamente.
 *
 * @param {number} pontos - Total de pontos (rolagens de dado)
 */
function calcular(pontos) {
  const frequencias = [0, 0, 0, 0, 0, 0];
  let pontosExtras = 0;

  for (let i = 0; i < pontos; i++) {
    const dado = Math.floor(Math.random() * 6) + 1;
    if (frequencias[dado - 1] < 18) {
      frequencias[dado - 1]++;
    } else {
      pontosExtras++;
    }
  }

  document.getElementById("resultado").textContent =
    frequencias.join("/");
  if (pontosExtras > 0) {
    document.getElementById("pontosExtras").textContent =
      "Você tem " +
      pontosExtras +
      " ponto(s) extra(s) por ultrapassar o limite de 18 em algum atributo. " +
      "Você pode redistribuí-los como desejar.";
  } else {
    document.getElementById("pontosExtras").textContent = "";
  }
}

/**
 * Lê o valor do campo personalizado e valida se o número é divisível por 6.
 * Se válido, chama a função calcular; caso contrário, exibe uma mensagem de erro.
 */
function calcularPersonalizado() {
  const inputPontuacao = document.getElementById("personalizado").value;
  const pontuacao = parseInt(inputPontuacao, 10);

  document.getElementById("resultado").textContent = "";
  document.getElementById("pontosExtras").textContent = "";

  if (!isNaN(pontuacao) && pontuacao > 0 && pontuacao % 6 === 0) {
    calcular(pontuacao);
  } else {
    document.getElementById("resultado").textContent =
      "Insira um número divisível por seis. A sua pontuação " +
      inputPontuacao +
      " não é válida.";
  }
}
