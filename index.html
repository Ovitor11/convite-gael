const video = document.getElementById("videoAbertura");
const telaVideo = document.getElementById("telaVideo");
const telaConvite = document.getElementById("telaConvite");
const btnSom = document.getElementById("btnSom");
const audioConvite = document.getElementById("audioConvite");

const btnWhatsapp = document.getElementById("btnWhatsapp");
const btnLocal = document.getElementById("btnLocal");
const btnPresente = document.getElementById("btnPresente");

let transicaoIniciada = false;

function iniciarTransicao() {
  if (transicaoIniciada) return;
  transicaoIniciada = true;

  telaConvite.classList.remove("escondido");

  requestAnimationFrame(() => {
    telaConvite.classList.add("mostrar");
    telaVideo.classList.add("sumindo");
  });

  setTimeout(() => {
    video.pause();
    telaVideo.style.display = "none";
    document.body.style.overflow = "auto";

    if (!video.muted) {
      audioConvite.play().catch(() => {});
    }
  }, 1000);
}

btnSom.addEventListener("click", () => {
  video.muted = false;
  video.play();
  btnSom.style.display = "none";
});

video.addEventListener("timeupdate", () => {
  if (!video.duration || transicaoIniciada) return;

  const tempoRestante = video.duration - video.currentTime;

  if (tempoRestante <= 0.6) {
    iniciarTransicao();
  }
});

video.addEventListener("ended", iniciarTransicao);

btnWhatsapp.addEventListener("click", () => {
  const numero = "558198332042";
  const texto = "Olá! Confirmo presença no aniversário do Gael 🦁🎉";
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(link, "_blank");
});

btnLocal.addEventListener("click", () => {
  const linkMaps = "https://maps.app.goo.gl/dZK3eFPxo3Fr3zGv5?g_st=aw";
  window.open(linkMaps, "_blank");
});

btnPresente.addEventListener("click", () => {
  alert("Sugestões de presentes: roupinhas, brinquedos educativos ou um mimo especial para o Gael 🎁");
});
