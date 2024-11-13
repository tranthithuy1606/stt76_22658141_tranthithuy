// Hàm tải giỏ hàng từ localStorage
function loadCartFromLocalStorage() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

// Hàm hiển thị giỏ hàng trong bảng
function renderCart() {
    const cart = loadCartFromLocalStorage();
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemHtml = `<tr>
            <td>${index + 1}</td>
            <td><img src="${item.image}" alt="${item.name}" width="50"></td>
            <td>${item.name}</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="decreaseQuantity(${index})">-</button>
                ${item.quantity}
                <button class="btn btn-sm btn-success" onclick="increaseQuantity(${index})">+</button>
            </td>
            <td>${item.price}₫</td>
            <td>${itemTotal}₫</td>
            <td><button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Xóa</button></td>
        </tr>`;

        cartItems.insertAdjacentHTML('beforeend', itemHtml);
    });

    cartTotal.textContent = total + '₫';
}

// Hàm tăng số lượng sản phẩm
function increaseQuantity(index) {
    const cart = loadCartFromLocalStorage();
    cart[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Hàm giảm số lượng sản phẩm
function decreaseQuantity(index) {
    const cart = loadCartFromLocalStorage();
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeItem(index) {
    const cart = loadCartFromLocalStorage();
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Khởi động hiển thị giỏ hàng
document.addEventListener('DOMContentLoaded', renderCart);
