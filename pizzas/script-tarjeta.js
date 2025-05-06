const total = localStorage.getItem('totalCompra'); 
const metodoPago = localStorage.getItem('metodoPago');  

document.getElementById('total').innerText = `$${total}`;
document.getElementById('metodoPago').innerText = metodoPago.charAt(0).toUpperCase() + metodoPago.slice(1);
