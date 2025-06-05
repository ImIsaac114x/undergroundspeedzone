const formEnvio = document.getElementById('formEnvio');
  const botonVolver = document.getElementById('botonVolver');

  botonVolver.addEventListener('click', () => {
    window.location.href = 'pedidos.html'; 
  });

  formEnvio.addEventListener('submit', (e) => {
    e.preventDefault();

    const datosEnvio = {
      nombre: formEnvio.nombreEnvio.value.trim(),
      direccion: formEnvio.direccion.value.trim(),
      telefono: formEnvio.telefono.value.trim(),
      instrucciones: formEnvio.instrucciones.value.trim()
    };

    localStorage.setItem('datosEnvio', JSON.stringify(datosEnvio));

    const metodoPago = localStorage.getItem('metodoPago');

    alert('¡Datos de envío guardados! Ahora continúa con el pago.');

    if(metodoPago === 'tarjeta'){
      window.location.href = 'metodo-tarjeta.html';
    } else if(metodoPago === 'efectivo'){
      window.location.href = 'metodo-efectivo.html';
    } else {
      alert('No se encontró método de pago válido. Por favor, vuelve a la página de pedidos.');
      window.location.href = 'pedidos.html';
    }
  });