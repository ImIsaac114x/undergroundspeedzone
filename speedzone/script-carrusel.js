// Esperamos a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', () => {
  // Menú de hamburguesa
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // --------------------
  // Carrusel de imágenes
  // --------------------
  const carouselImages = document.querySelector('.carousel-images');
  const indicators = document.querySelectorAll('.carousel-indicators button');
  let currentIndex = 0;
  const totalSlides = indicators.length;

  function goToSlide(index) {
    // Aseguramos que el índice esté en el rango válido (0..totalSlides-1)
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }

    // Cada slide equivale a 100% / totalSlides
    const shiftPercent = (100 / totalSlides) * index;
    carouselImages.style.transform = `translateX(-${shiftPercent}%)`;

    // Actualizar indicador activo
    indicators.forEach(btn => btn.classList.remove('active'));
    indicators[index].classList.add('active');

    currentIndex = index;
  }

  // Avanza automáticamente cada 5 segundos
  setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 5000);

  // Permitir click en cada botón indicador
  indicators.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      goToSlide(idx);
    });
  });
});
