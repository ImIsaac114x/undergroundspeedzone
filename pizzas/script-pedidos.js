hora = new Date().getHours();
const formulario = document.getElementById('formulario');
const boton1 = document.getElementById('boton1');
const totalElement = document.getElementById('total');
const nombre = document.getElementById('nombre');
const fecha = document.getElementById('fecha');
const complementos = document.getElementById('complementos');
const metodoentrega = document.getElementById('metodoentrega');
const boton2 = document.getElementById('boton2');

if (hora >= 21 || hora < 0){
  document.write('Gracias por su preferencia, lo esperamos en horario laboral.');
  formulario.style.display = 'none';
  boton1.style.display = 'none';
  totalElement.style.display = 'none';
  nombre.style.display = 'none';
  fecha.style.display = 'none';
  complementos.style.display = 'none';
  metodoentrega.style.display = 'none';
} else {
  document.write('<br>Gracias por su preferencia.');
}

boton1.addEventListener('click', function () {
  const pizzas = [];
  let total = 0;

  for (let i = 1; i <= 3; i++) {
    const pizzaSeleccionada = document.getElementById(`pizza${i}`);
    if (pizzaSeleccionada && pizzaSeleccionada.value !== "0") {
      const precioPizza = parseInt(pizzaSeleccionada.value, 10);
      pizzas.push(pizzaSeleccionada.options[pizzaSeleccionada.selectedIndex].text);
      total += precioPizza;
    }
  }

  if (pizzas.length === 0) {
    alert('Por favor, selecciona al menos una pizza para continuar.');
    return;
  }

  const complementosSeleccionados = [];
  const complementosChecked = document.querySelectorAll('.complementos:checked');
  complementosChecked.forEach(complemento => {
    complementosSeleccionados.push(complemento.nextSibling.textContent.trim());
    total += parseInt(complemento.value, 10);
  });

  const metodoEntregaRadio = document.querySelector('.metodoentrega:checked');
  const metodoEntrega = metodoEntregaRadio ? metodoEntregaRadio.nextSibling.textContent.trim() : '';

  const metodoPagoRadio = document.querySelector('.metododepago:checked');
  if (!metodoPagoRadio) {
    alert('Por favor, selecciona un método de pago.');
    return;
  }
  const metodoPago = metodoPagoRadio.value;

  localStorage.setItem('pizzasSeleccionadas', JSON.stringify(pizzas));
  localStorage.setItem('complementosSeleccionados', JSON.stringify(complementosSeleccionados));
  localStorage.setItem('metodoEntrega', metodoEntrega);
  localStorage.setItem('metodoPago', metodoPago);
  localStorage.setItem('totalCompra', total.toString());

  if (metodoEntrega.includes('Envío')) {
    window.location.href = 'envio.html';
    return;
  }

  if (metodoPago === 'tarjeta') {
    window.location.href = 'metodo-tarjeta.html';
  } else if (metodoPago === 'efectivo') {
    window.location.href = 'metodo-efectivo.html';
  } else {
    alert('Por favor, selecciona un método de pago válido.');
  }
});

boton2.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'indexpizza.html';
});