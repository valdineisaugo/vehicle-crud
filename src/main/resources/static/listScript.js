document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('vehiclesTable').getElementsByTagName('tbody')[0];

    fetch('/api/vehicles')
        .then(response => response.json())
        .then(vehicles => {
            vehicles.forEach(vehicle => {
                let row = tableBody.insertRow();
                row.insertCell(0).textContent = vehicle.id;
                row.insertCell(1).textContent = vehicle.licensePlate;
                row.insertCell(2).textContent = vehicle.brand;
                row.insertCell(3).textContent = vehicle.model;
                row.insertCell(4).textContent = vehicle.price.toFixed(2);
                let editCell = row.insertCell(5);
                let editButton = document.createElement('button');
                editButton.textContent = 'Editar';
                editButton.className = 'edit-btn'; // Assegure que esta classe está sendo usada
                editButton.onclick = function() { editVehicle(vehicle); };
                editCell.appendChild(editButton);
            });
        })
        .catch(error => console.error('Erro ao carregar veículos:', error));
});

function editVehicle(vehicle) {
    document.getElementById('editId').value = vehicle.id;
    document.getElementById('editLicensePlate').value = vehicle.licensePlate;
    document.getElementById('editBrand').value = vehicle.brand;
    document.getElementById('editModel').value = vehicle.model;
    document.getElementById('editPrice').value = vehicle.price;
    document.getElementById('editForm').style.display = 'block';
}
