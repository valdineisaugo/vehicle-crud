document.getElementById('vehicleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const vehicleData = {
        licensePlate: document.getElementById('licensePlate').value,
        brand: document.getElementById('brand').value,
        model: document.getElementById('model').value,
        price: parseFloat(document.getElementById('price').value),
    };

    fetch('/api/vehicles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vehicleData)
    })
        .then(response => {
            if (response.ok) {
                window.location.href = 'list.html';
            } else {
                throw new Error('Falha ao cadastrar veículo');
            }
        })
        .catch(error => {
            console.error('Erro ao cadastrar veículo:', error);
            alert('Erro ao cadastrar veículo: ' + error.message);
        });
});
