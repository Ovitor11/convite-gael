const video = document.getElementById("videoAbertura");
const telaVideo = document.getElementById("telaVideo");
const telaConvite = document.getElementById("telaConvite");
const btnSom = document.getElementById("btnSom");
const audioConvite = document.getElementById("audioConvite");
const telaPresente = document.getElementById("telaPresente");

const btnWhatsapp = document.getElementById("btnWhatsapp");
const btnLocal = document.getElementById("btnLocal");
const btnPresente = document.getElementById("btnPresente");

let transicaoIniciada = false;

function iniciarTransicao() {
  if (transicaoIniciada) return;
  transicaoIniciada = true;

  if (!video.muted) {
    audioConvite.currentTime = 0;
    audioConvite.play().catch(() => {});
  }

  telaConvite.classList.remove("escondido");

  requestAnimationFrame(() => {
    telaConvite.classList.add("mostrar");
    telaVideo.classList.add("sumindo");
  });

  setTimeout(() => {
    video.pause();
    telaVideo.style.display = "none";
    document.body.style.overflow = "auto";
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
  criarFogos();

  setTimeout(() => {
    const numero = "558198332042";
    const texto = "Olá! Confirmo presença no aniversário do Gael 🦁🎉";
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(link, "_blank");
  }, 800);
});

btnLocal.addEventListener("click", () => {
  const linkMaps = "https://maps.app.goo.gl/dZK3eFPxo3Fr3zGv5?g_st=aw";
  window.open(linkMaps, "_blank");
});

btnPresente.addEventListener("click", () => {
  telaPresente.classList.remove("escondido");
});

telaPresente.addEventListener("click", () => {
  telaPresente.classList.add("escondido");
});

function criarFogos() {
  const container = document.getElementById("fogos");

  for (let i = 0; i < 60; i++) { 
    const particula = document.createElement("div");
    particula.classList.add("particula");


    particula.style.left = "50%";
    particula.style.top = "62%";

    const x = (Math.random() - 0.5) * 400 + "px";
    const y = (Math.random() - 0.5) * 400 + "px";

    particula.style.setProperty("--x", x);
    particula.style.setProperty("--y", y);

    const cores = ["#FFD700", "#FF4D4D", "#6FCF97", "#56CCF2", "#BB6BD9", "#F2994A"];
    particula.style.background = cores[Math.floor(Math.random() * cores.length)];

  
    const tamanho = Math.random() * 10 + 6; 
    particula.style.width = tamanho + "px";
    particula.style.height = tamanho + "px";

    container.appendChild(particula);

    setTimeout(() => {
      particula.remove();
    }, 1000);
  }
}
