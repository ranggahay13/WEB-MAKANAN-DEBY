let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const item = event.target.closest('.item');
        const id = item.dataset.id;
        const name = item.dataset.name;
        const price = item.dataset.price;

        // Menambahkan produk ke keranjang
        cart.push({ id, name, price });

        alert(`${name} berhasil ditambahkan ke keranjang!`);
        updateCart();
    });
});

const updateCart = () => {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - Rp ${item.price}`;
        cartItemsDiv.appendChild(itemElement);
    });
};

// Fungsi untuk transisi dan pindah halaman
const fadeOutAndRedirect = (url) => {
    document.body.classList.add('fade-out');  // Tambahkan efek fade
    setTimeout(() => {
        window.location.href = url;
    }, 500); // waktu sama dengan CSS transition
};

const placeOrderButton = document.getElementById('place-order');
if (placeOrderButton) {
    placeOrderButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Pesanan Anda berhasil dibuat!');
            cart = [];
            updateCart();

            // Redirect dengan efek transisi ke halaman sukses (misalnya 'success.html')
            fadeOutAndRedirect('success.html');
        } else {
            alert('Keranjang Anda kosong!');
        }
    });
}
