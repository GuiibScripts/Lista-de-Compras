document.addEventListener("DOMContentLoaded", function() {
    const addItemButton = document.querySelector('.add-item button');
    const inputField = document.querySelector('.add-item input');
    const form = document.querySelector('.itens-adicionado');
    const alertBox = document.querySelector('.alert');
    const closeAlertButton = alertBox.querySelector('.close-alert'); // Seleciona o ícone de close no alerta

    addItemButton.addEventListener('click', function(event) {
        event.preventDefault();
        const itemName = inputField.value.trim();
        
        if (itemName) {
            const newItem = document.createElement('div');
            newItem.classList.add('item');

            newItem.innerHTML = `
                <label>
                    <input type="checkbox">
                    <img src="./assets/icons/checkbox.svg" alt="Checkbox" class="checkbox-image">
                    <span>${itemName}</span>
                </label>
                <img src="./assets/icons/lixeira.svg" alt="Excluir ${itemName}" class="delete-item">
            `;

            form.appendChild(newItem);
            form.removeAttribute('id'); 
            inputField.value = ''; 
        }
    });

    form.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-item')) {
            const item = event.target.closest('.item');
            item.remove(); 

            alertBox.querySelector('span').textContent = `O item foi removido da lista`;
            alertBox.removeAttribute('id'); 
        }
    });

    closeAlertButton.addEventListener('click', function() {
        alertBox.setAttribute('id', 'hidden');
    });
});
