const total = parseFloat(localStorage.getItem('totalCompra')) || 0;
        document.getElementById('total').innerText = `$${total.toFixed(2)}`;

        function calcularCambio() {
            const efectivo = parseFloat(document.getElementById('efectivo').value);
            if (isNaN(efectivo) || efectivo < total) {
                alert('El monto entregado no es suficiente o no es válido.');
                return;
            }
            const cambio = efectivo - total;
            document.getElementById('cambio').innerText = `$${cambio.toFixed(2)}`;
        }