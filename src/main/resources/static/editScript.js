function fetchVehicle() {
    const id = document.getElementById('searchId').value;
    fetch(`/api/vehicles/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Veículo não encontrado');
            }
            return response.json();
        })
        .then(vehicle => {
            document.getElementById('id').value = vehicle.id;
            document.getElementById('licensePlate').value = vehicle.licensePlate;
            document.getElementById('brand').value = vehicle.brand;
            document.getElementById('model').value = vehicle.model;
            document.getElementById('price').value = vehicle.price;
        })
        .catch(error => {
            console.error('Erro ao buscar veículo:', error);
            alert(error.message);
        });
}

document.getElementById('editVehicleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const vehicleData = {
        id: document.getElementById('id').value,
        licensePlate: document.getElementById('licensePlate').value,
        brand: document.getElementById('brand').value,
        model: document.getElementById('model').value,
        price: parseFloat(document.getElementById('price').value),
    };

    fetch(`/api/vehicles/${vehicleData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vehicleData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha ao atualizar veículo');
            }
            alert('Veículo atualizado com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao atualizar veículo:', error);
            alert('Erro ao atualizar veículo: ' + error.message);
        });
});
