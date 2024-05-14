document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/vehicles')
        .then(response => response.json())
        .then(vehicles => {
            const tableBody = document.getElementById('vehiclesTable').getElementsByTagName('tbody')[0];
            vehicles.forEach(vehicle => {
                let row = tableBody.insertRow();
                row.insertCell(0).textContent = vehicle.id;
                row.insertCell(1).textContent = vehicle.licensePlate;
                row.insertCell(2).textContent = vehicle.brand;
                row.insertCell(3).textContent = vehicle.model;
                row.insertCell(4).textContent = vehicle.price.toFixed(2);
            });
        })
        .catch(error => console.error('Erro ao carregar veículos:', error));
});
