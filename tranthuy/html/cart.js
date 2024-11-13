// Hàm tải giỏ hàng từ localStorage
function loadCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Hàm lưu giỏ hàng vào localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Hàm cập nhật số lượng hiển thị trên biểu tượng giỏ hàng
function updateCartCount() {
    const cart = loadCart();
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalCount;
}

// Hàm thêm sản phẩm vào giỏ hàng (đã có sẵn trong phần giỏ hàng)
function addToCart(product) {
    let cart = loadCart();
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += product.quantity;
    } else {
        cart.push(product);
    }

    saveCart(cart);
    updateCartCount();
}

// Gọi hàm cập nhật số lượng ngay khi trang tải xong
document.addEventListener('DOMContentLoaded', updateCartCount);