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

// ---------- Bloque para generar PDF de la sección .intro ----------
document.addEventListener('DOMContentLoaded', () => {
  // 1) Esperamos a que exista el botón
  const btnDescargar = document.getElementById('download-pdf');
  if (!btnDescargar) return;

  btnDescargar.addEventListener('click', () => {
    // 2) Obtenemos jsPDF desde window.jspdf
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      unit: 'pt',
      format: 'letter'
    });

    // 3) Seleccionamos el contenedor con la info del videojuego
    const introElement = document.querySelector('.intro');
    if (!introElement) {
      alert('No se encontró la sección de información.');
      return;
    }

    // 4) Obtenemos el texto completo (incluye títulos, párrafos, etc.)
    const text = introElement.innerText.trim();

    // 5) Parámetros de margen y ancho útil de página
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40; // en puntos (pt)
    const usableWidth = pageWidth - margin * 2;

    // 6) Dividimos el texto en líneas que quepan en 'usableWidth'
    const lines = doc.splitTextToSize(text, usableWidth);

    // 7) Escribimos el contenido en el PDF, empezando a 40pt desde arriba
    doc.text(lines, margin, 60);

    // 8) Nombre final del PDF y descarga
    doc.save('Need_for_Speed_Underground_Info.pdf');
  });
});
