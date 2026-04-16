// DATA DO EVENTO
const dataEvento = new Date("April 20, 2026 16:00:00").getTime();

// CONTADOR
setInterval(() => {
  let agora = new Date().getTime();
  let tempo = dataEvento - agora;

  let dias = Math.floor(tempo / (1000 * 60 * 60 * 24));
  let horas = Math.floor((tempo / (1000 * 60 * 60)) % 24);
  let minutos = Math.floor((tempo / (1000 * 60)) % 60);

  document.getElementById("contador").innerHTML =
    `⏳ Faltam ${dias} dias, ${horas}h e ${minutos}m`;
}, 1000);

// BOTÃO
function confirmar() {
  alert("🐒 Presença confirmada! Te esperamos no safari do Gael!");
}