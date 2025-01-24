// Cambiar imágenes automáticamente
const images = ["MEDIA/IMG1.jpg", "MEDIA/img2.jpg", "MEDIA/img3.jpg"]; // Lista de imágenes
let currentIndex = 0;
const slider = document.getElementById("slider");

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Ciclar entre las imágenes
  slider.style.opacity = 0; // Desvanece la imagen actual
  setTimeout(() => {
    slider.src = images[currentIndex];
    slider.style.opacity = 1; // Muestra la nueva imagen
  }, 500); // Tiempo de transición
}
setInterval(changeImage, 3000); // Cambia cada 3 segundos

// Mostrar fecha y hora actual
function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  document.getElementById("date").textContent = `Fecha: ${date}`;
  document.getElementById("time").textContent = `Hora: ${time}`;
}
setInterval(updateDateTime, 1000);

// Auto-scroll en la tabla de programación
const tableContainer = document.querySelector(".table-container");
let scrollPosition = 0;

function autoScrollTable() {
  scrollPosition += 1; // Incrementa el scroll
  tableContainer.scrollTop = scrollPosition;

  if (scrollPosition >= tableContainer.scrollHeight - tableContainer.clientHeight) {
    scrollPosition = 0; // Reinicia el scroll cuando llega al final
  }
}
setInterval(autoScrollTable, 50); // Velocidad del scroll

