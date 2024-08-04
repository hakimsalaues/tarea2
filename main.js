document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        input.value = parseInt(input.value) + 1;
        updateTotals();
    });
});

document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.nextElementSibling;
        if (parseInt(input.value) > 0) {
            input.value = parseInt(input.value) - 1;
            updateTotals();
        }
    });
});

function updateTotals() {
    let totalItems = 0;
    let totalCost = 0;

    document.querySelectorAll('.quantity').forEach(input => {
        const quantity = parseInt(input.value);
        const price = parseFloat(input.closest('.producto-item').querySelector('.price').textContent.replace('$', ''));
        totalItems += quantity;
        totalCost += quantity * price;
    });

    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);
}

function resetQuantities() {
    document.querySelectorAll('.quantity').forEach(input => {
        input.value = 0;
    });
    updateTotals();
}

document.getElementById('confirmPurchase').addEventListener('click', () => {
    alert(`Total Items: ${document.getElementById('totalItems').textContent}\nTotal Cost: $${document.getElementById('totalCost').textContent}\nRevise su mail para ver mas informacion y facturacion de su compra.`);
    resetQuantities();
});
