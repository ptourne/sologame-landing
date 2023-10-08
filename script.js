// JavaScript to rotate the logo on click
document.getElementById('logo').addEventListener('click', function() {
    this.classList.toggle('rotate');
    setTimeout(() => {
        this.classList.toggle('rotate');
    }, 1000); // Revert rotation after 1 second (adjust as needed)
});

// JavaScript para reproducir automáticamente el video en la sección "Titan"
document.addEventListener('DOMContentLoaded', function () {
  var titanSection = document.querySelector('.Titan');
  var titanVideo = document.getElementById('titan-video');

  // Opciones de observación
  var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Cuando la mitad del elemento es visible
  };

  // Crear un observador
  var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
          if (entry.isIntersecting) {
              // El elemento es visible en la ventana, reproducir el video desde el primer segundo
              titanVideo.currentTime = 1; // Establecer el tiempo actual en 1 segundo
              titanVideo.play();
              // Detener la observación una vez que el video comienza
              observer.unobserve(titanSection);
          }
      });
  }, options);

  // Iniciar la observación en la sección "Titan"
  observer.observe(titanSection);
});
$(document).ready(function () {
  // Inicializa el carrusel
  $('#myCarousel').carousel({
      interval: 2000, // Establece el intervalo en milisegundos (ejemplo: 2 segundos)
      wrap: true, // Permite la transición continua
      keyboard: false // Desactiva el control del teclado para evitar interrupciones
  });
});

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 1000,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true, // Agrega esta opción para que el carrusel se repita
});








