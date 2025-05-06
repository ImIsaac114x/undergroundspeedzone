hora = new Date().getHours();
const formulario = document.getElementById('formulario');
const boton1 = document.getElementById('boton1');
const totalElement = document.getElementById('total');
const nombre = document.getElementById('nombre');
const fecha = document.getElementById('fecha');
const complementos = document.getElementById('complementos');
const metodoentrega = document.getElementById('metodoentrega');
const boton2 = document.getElementById('boton2');
const metodoPago = document.querySelector('.metododepago:checked').value;

if (hora >= 21 || hora < 0){
  document.write('Gracias por su preferencia, lo esperamos en horario laboral.');
  formulario.style.display = 'none';
  boton1.style.display = 'none';
  totalElement.style.display = 'none';
  nombre.style.display = 'none';
  fecha.style.display = 'none';
  complementos.style.display = 'none';
  metodoentrega.style.display = 'none';
}
else{
  document.write('<br>Gracias por su preferencia.');
}

boton1.addEventListener('click', function () {
  const pizzas = [];
  for (let i = 1; i <= 3; i++) {
    const pizzaSeleccionada = document.getElementById(`pizza${i}`);
    if (pizzaSeleccionada && pizzaSeleccionada.value) {
      pizzas.push(pizzaSeleccionada.options[pizzaSeleccionada.selectedIndex].text);
    }
  }

  const complementosSeleccionados = [];
  const complementos = document.querySelectorAll('.complementos:checked');
  complementos.forEach(complemento => {
    complementosSeleccionados.push(complemento.nextSibling.textContent.trim());
  });

  const metodoEntrega = document.querySelector('.metodoentrega:checked').nextSibling.textContent.trim();

  const metodoPago = document.querySelector('.metododepago:checked').value;

  let total = 0;
  pizzas.forEach(pizza => {
    total += parseInt(pizza.match(/\d+/)[0]);
  });
  complementosSeleccionados.forEach(complemento => {
    total += parseInt(complemento.match(/\d+/)[0]);
  });
  total += metodoEntrega.includes("Envío") ? 50 : 0;

  localStorage.setItem('pizzasSeleccionadas', JSON.stringify(pizzas));
  localStorage.setItem('complementosSeleccionados', JSON.stringify(complementosSeleccionados));
  localStorage.setItem('metodoEntrega', metodoEntrega);
  localStorage.setItem('metodoPago', metodoPago);
  localStorage.setItem('totalCompra', total.toString());

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