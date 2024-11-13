document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', function() {
        const quantityElem = this.previousElementSibling;
        const quantity = parseInt(quantityElem.textContent);
        quantityElem.textContent = quantity + 1;

        updateTotalPrice(this.closest('.cart-item'));
    });
});

document.querySelectorAll('.minus').forEach(button => {
    button.addEventListener('click', function() {
        const quantityElem = this.nextElementSibling;
        const quantity = parseInt(quantityElem.textContent);
        if (quantity > 1) {
            quantityElem.textContent = quantity - 1;

            updateTotalPrice(this.closest('.cart-item'));
        }
    });
});

function updateTotalPrice(item) {
    const priceElem = item.querySelector('.price');
    const totalPriceElem = item.querySelector('.total-price');
    const quantityElem = item.querySelector('.quantity span');

    const price = parseFloat(priceElem.textContent.split(' ₫')[0].replace(',', '.'));
    const quantity = parseInt(quantityElem.textContent);

    const totalPrice = (price * quantity).toFixed(3).replace('.', ',');
    totalPriceElem.textContent = `${totalPrice} ₫`;

    updateFinalTotal();
}

function updateFinalTotal() {
    let finalTotal = 0;
    document.querySelectorAll('.total-price').forEach(priceElem => {
        finalTotal += parseFloat(priceElem.textContent.split(' ₫')[0].replace(',', '.'));
    });

    document.querySelector('.final-price').textContent = `${finalTotal.toFixed(3).replace('.', ',')} ₫`;
}
