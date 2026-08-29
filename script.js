// =========================================================
// script.js
// Lógica de interacción: soplar la vela y lanzar confeti.
// Separado del HTML/CSS para que sea fácil de editar.
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const candleBtn = document.getElementById("candleBtn");
  const flame = document.getElementById("flame");
  const candleHint = document.getElementById("candleHint");
  const celebrateBtn = document.getElementById("celebrateBtn");
  const confettiLayer = document.getElementById("confettiLayer");

  let velaApagada = false;

  // --- Interacción de la vela ---
  candleBtn.addEventListener("click", () => {
    if (velaApagada) {
      // Si ya estaba apagada, la volvemos a encender
      flame.classList.remove("is-out");
      candleHint.textContent = "Toca la vela y pide un deseo para papá 🎂";
      velaApagada = false;
    } else {
      // La apagamos y mostramos un mensaje + confeti
      flame.classList.add("is-out");
      candleHint.textContent = "¡Deseo pedido! Que este año sea el mejor para ti, papá 🎉";
      velaApagada = true;
      lanzarConfeti(40);
    }
  });

  // --- Botón "Celebrar a papá" ---
  celebrateBtn.addEventListener("click", () => {
    lanzarConfeti(80);
  });

  // --- Generador de confeti simple ---
  function lanzarConfeti(cantidad) {
    const colores = ["#eab54e", "#f6d98c", "#e4694f", "#f7f1e3"];

    for (let i = 0; i < cantidad; i++) {
      const pieza = document.createElement("div");
      pieza.className = "confetti-piece";

      const size = Math.random() * 8 + 6; // 6px - 14px
      const left = Math.random() * 100; // posición horizontal en %
      const duracion = Math.random() * 2 + 2.5; // 2.5s - 4.5s
      const retraso = Math.random() * 0.4;
      const color = colores[Math.floor(Math.random() * colores.length)];

      pieza.style.width = `${size}px`;
      pieza.style.height = `${size * 0.6}px`;
      pieza.style.left = `${left}%`;
      pieza.style.backgroundColor = color;
      pieza.style.animationDuration = `${duracion}s`;
      pieza.style.animationDelay = `${retraso}s`;

      confettiLayer.appendChild(pieza);

      // Limpieza: quitamos la pieza del DOM cuando termina su animación
      setTimeout(() => {
        pieza.remove();
      }, (duracion + retraso) * 1000 + 200);
    }
  }
});