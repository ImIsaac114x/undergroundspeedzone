window.addEventListener('DOMContentLoaded', () => {
  const total = localStorage.getItem('totalCompra'); 
  const metodoPago = localStorage.getItem('metodoPago');

  if (total && document.getElementById('total')) {
    document.getElementById('total').innerText = `$${total}`;
  }

  if (metodoPago && document.getElementById('metodoPago')) {
    document.getElementById('metodoPago').innerText = metodoPago.charAt(0).toUpperCase() + metodoPago.slice(1);
  }

  const paymentForm = document.getElementById('payment-form');
  if (paymentForm) {
    paymentForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const numeroTarjeta = document.getElementById('numerotarjeta').value.trim();
      const fechaExpir = document.getElementById('fechaexpir').value.trim();
      const cvv = document.getElementById('cvv').value.trim();
      const nombreTarjeta = document.getElementById('nombretarjeta').value.trim();

      if (!numeroTarjeta || !fechaExpir || !cvv || !nombreTarjeta) {
        alert('Por favor completa todos los campos.');
        return;
      }

      localStorage.setItem('tarjetaNumero', numeroTarjeta);
      localStorage.setItem('tarjetaExpiracion', fechaExpir);
      localStorage.setItem('tarjetaCVV', cvv);
      localStorage.setItem('tarjetaNombre', nombreTarjeta);

      alert('✅ Datos de la tarjeta almacenados correctamente. Ya puedes finalizar tu pedido.');
    });
  }
});
