    document.addEventListener("DOMContentLoaded", function() {
    const anteriorBtn = document.getElementById("anterior");
    const proximoBtn = document.getElementById("proximo");
    const iframe = document.querySelector("#rodadas iframe");
    const rodadas = ["rodada01.html", "rodada02.html", "rodada03.html"]; // Adicione mais URLs de rodadas, se necessário.
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
