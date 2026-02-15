// Contador
const fechaBoda = new Date("Dec 20, 2026 00:00:00").getTime();

setInterval(function() {
  const ahora = new Date().getTime();
  const distancia = fechaBoda - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("contador").innerHTML =
    dias + " días " + horas + "h " + minutos + "m";

}, 1000);

// Música
const musica = document.getElementById("musica");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", function() {
  if (musica.paused) {
    musica.play();
    btn.innerText = "⏸ Pausar música";
  } else {
    musica.pause();
    btn.innerText = "🎵 Activar música";
  }
});
