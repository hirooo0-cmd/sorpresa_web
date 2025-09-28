// CONFIGURACIÓN: Cambia esta fecha por la de tu aniversario (formato YYYY-MM-DD)
const FECHA_ANIVERSARIO = "2024-06-28"; // ← ¡EDITA ESTA LÍNEA!

const inputFecha = document.getElementById("inputFecha");
const btnVerificar = document.getElementById("btnVerificar");
const mensajeError = document.getElementById("mensajeError");
const pantallaInicio = document.getElementById("inicio");
const pantallaExito = document.getElementById("exito");
const contenedorCorazones = document.getElementById("corazones");
const musica = document.getElementById("musicaFondo");

// Intentar reproducir música al interactuar (necesario por políticas de navegadores)
btnVerificar.addEventListener("click", () => {
  musica.play().catch(e => console.log("Música no se reprodujo automáticamente:", e));
});

btnVerificar.addEventListener("click", () => {
  const fechaIngresada = inputFecha.value;

  if (!fechaIngresada) {
    mensajeError.textContent = "Por favor, selecciona una fecha.";
    return;
  }

  if (fechaIngresada === FECHA_ANIVERSARIO) {
    mensajeError.textContent = "";
    pantallaInicio.classList.add("oculta");
    setTimeout(() => {
      pantallaExito.classList.remove("oculta");
      iniciarCorazones();
    }, 800);
  } else {
    mensajeError.textContent = "❌ Esa no es nuestra fecha... ¡inténtalo de nuevo!";
  }
});

function iniciarCorazones() {
  const colores = ["#ff4d6d", "#ff758f", "#ff9eaa", "#ffb3c6"];
  const totalCorazones = 50;

  for (let i = 0; i < totalCorazones; i++) {
    setTimeout(() => {
      crearCorazon(colores[Math.floor(Math.random() * colores.length)]);
    }, i * 200); // Aparecen uno tras otro
  }
}

function crearCorazon(color) {
  const corazon = document.createElement("div");
  corazon.innerHTML = "❤️";
  corazon.className = "corazon";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.color = color;
  corazon.style.fontSize = (Math.random() * 24 + 16) + "px";
  corazon.style.animationDuration = (Math.random() * 4 + 4) + "s";
  contenedorCorazones.appendChild(corazon);

  // Eliminar corazón del DOM tras la animación para no saturar
  setTimeout(() => {
    corazon.remove();
  }, 6000);
}