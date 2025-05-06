const total = localStorage.getItem('totalCompra'); 
const metodoPago = localStorage.getItem('metodoPago');  
const metodoEntrega = localStorage.getItem('metodoEntrega');
const pizzas = JSON.parse(localStorage.getItem('pizzasSeleccionadas')) || [];
const complementos = JSON.parse(localStorage.getItem('complementosSeleccionados')) || [];

document.getElementById('total').innerText = `$${total}`;

document.getElementById('metodoPago').innerText = metodoPago.charAt(0).toUpperCase() + metodoPago.slice(1);

document.getElementById('metodoEntrega').innerText = metodoEntrega.charAt(0).toUpperCase() + metodoEntrega.slice(1);

const listaPizzas = document.getElementById('listaPizzas');
pizzas.forEach(pizza => {
  const li = document.createElement('li');
  li.innerText = pizza;
  listaPizzas.appendChild(li);
});

const listaComplementos = document.getElementById('listaComplementos');
complementos.forEach(complemento => {
  const li = document.createElement('li');
  li.innerText = complemento;
  listaComplementos.appendChild(li);
});

document.getElementById('payment-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const numeroTarjeta = document.getElementById('numerotarjeta').value;
  const fechaExpiracion = document.getElementById('fechaexpir').value;
  const cvv = document.getElementById('cvv').value;
  const nombreTarjeta = document.getElementById('nombretarjeta').value;

  localStorage.setItem('numeroTarjeta', numeroTarjeta);
  localStorage.setItem('fechaExpiracion', fechaExpiracion);
  localStorage.setItem('cvv', cvv);
  localStorage.setItem('nombreTarjeta', nombreTarjeta);
});
