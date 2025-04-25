// Datos de productos (simulados)
const products = [
    {
        id: 1,
        name: "Lámpara de Macramé",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1606170033648-5d55a3fd2bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVsdW0lMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        description: "Hecha a mano con fibras naturales."
    },
    {
        id: 2,
        name: "Mesa de Madera Rústica",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVsdW0lMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        description: "Perfecta para exteriores."
    },
    {
        id: 3,
        name: "Cojines Bordados",
        price: 28.50,
        image: "https://images.unsplash.com/photo-1579656592043-a20e25ad4f56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVsdW0lMjBkZWNvcnxlbnwwfHwwfHx8MA%3D3D&auto=format&fit=crop&w=500&q=60",
        description: "Diseños artesanales mexicanos."
    }
];

let cart = [];

// Mostrar productos en la página
function displayProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})" class="add-to-cart">Añadir al carrito</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Añadir producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} añadido al carrito!`);
}

// Actualizar contador del carrito
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Inicializar la página
displayProducts();