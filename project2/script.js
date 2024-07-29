let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    updateCartDisplay();
    alert(`${productName} has been added to your cart at $${productPrice}.`);
}

function updateCartDisplay() {
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    
    cartCountElement.textContent = cart.length;
    cartItemsElement.innerHTML = '';

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(listItem);
    });
}
