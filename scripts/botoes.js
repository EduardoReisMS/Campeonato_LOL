    document.addEventListener("DOMContentLoaded", function() {
    const anteriorBtn = document.getElementById("anterior");
    const proximoBtn = document.getElementById("proximo");
    const iframe = document.querySelector("#rodadas iframe");
    const rodadas = ["pages/rodada01.html", "pages/rodada02.html", "pages/rodada03.html", "pages/rodada04.html", "pages/rodada05.html", "pages/rodada06.html", "pages/rodada07.html", "pages/rodada08.html", "pages/rodada09.html", "pages/rodada10.html"]; // Adicione mais URLs de rodadas, se necessário.
    let rodadaAtual = 0;

    function exibirRodada(rodadaIndex) {
      if (rodadaIndex >= 0 && rodadaIndex < rodadas.length) {
        iframe.src = rodadas[rodadaIndex];
        rodadaAtual = rodadaIndex;
      }
    }

    function mostrarProximaRodada() {
      exibirRodada(rodadaAtual + 1);
    }

    function mostrarRodadaAnterior() {
      exibirRodada(rodadaAtual - 1);
    }

    anteriorBtn.addEventListener("click", mostrarRodadaAnterior);
    proximoBtn.addEventListener("click", mostrarProximaRodada);
  });
