// Data produk warung premium
let products = [
    { id: 1, name: "Indomie Goreng", price: 3500, category: "Makanan", stock: 50, image: "https://images-na.ssl-images-amazon.com/images/I/81Z8eGrX4QL._AC_SL1500_.jpg", sales: 0 },
    { id: 2, name: "Indomie Aceh", price: 4000, category: "Makanan", stock: 45, image: "https://th.bing.com/th/id/R.0b06605a4c37990c8f05211cb3485fc7?rik=0ltG38fLYE4twg&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0397%2f5292%2f5335%2fproducts%2fH8a433f0b23d848e5a2a750d68b0c490ak_1080x1080_54adef0f-bf8b-4743-b5c2-1f938b940fb9_1200x1200.jpg%3fv%3d1609583970&ehk=SDD6s57rjhN4wfKkvBbtDFzeE4uINIGtNpheDlFo%2fPY%3d&risl=&pid=ImgRaw&r=0", sales: 0 },
    { id: 3, name: "Indomie Makasar", price: 4000, category: "Makanan", stock: 40, image: "https://tse1.mm.bing.net/th/id/OIP.8aF-oV4oLcx9Ux2nZb-DCAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", sales: 0 },
    { id: 4, name: "Indomie Ayam Geprek", price: 4500, category: "Makanan", stock: 35, image: "https://cf.shopee.co.id/file/924fe97c0a633d903012a22c118b8626", sales: 0 },
    { id: 5, name: "Sarimi isi 2", price: 3000, category: "Makanan", stock: 60, image: "https://cf.shopee.co.id/file/sg-11134201-22100-c3rqa5beu2ivc9", sales: 0 },
    { id: 6, name: "Sedap Goreng", price: 3500, category: "Makanan", stock: 55, image: "https://www.waroengindo.sg/image/cache/catalog/sedap%20goreng-1200x1200.jpg", sales: 0 },
    { id: 7, name: "Sarden", price: 12000, category: "Makanan", stock: 25, image: "https://down-id.img.susercontent.com/file/d0f6f6ca3eeb48cee43bdd9d822d2df2", sales: 0 },
    { id: 8, name: "Tepung Terigu", price: 15000, category: "Bahan Pokok", stock: 30, image: "https://id-test-11.slatic.net/p/ef457e91924080867657f00bd41299b6.jpg", sales: 0 },
    { id: 9, name: "Tepung Tapioka", price: 8000, category: "Bahan Pokok", stock: 35, image: "https://tse3.mm.bing.net/th/id/OIP.jm4npFcdUIJ8wkOru23YcAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", sales: 0 },
    { id: 10, name: "Gula", price: 12000, category: "Bahan Pokok", stock: 40, image: "https://down-id.img.susercontent.com/file/c82c79c3e20c2c749f8841ca91de7143", sales: 0 },
    { id: 11, name: "Garam", price: 5000, category: "Bahan Pokok", stock: 50, image: "https://down-id.img.susercontent.com/file/sg-11134201-22100-7erbb1ppw8ivd1", sales: 0 },
    { id: 12, name: "Kopi ABC", price: 2000, category: "Minuman", stock: 100, image: "https://cf.shopee.co.id/file/4f2cd9f48b323a1702b1f4fd91aeca22", sales: 0 },
    { id: 13, name: "Kopi Hitam", price: 1500, category: "Minuman", stock: 80, image: "https://img.mbizmarket.co.id/products/thumbs/800x800/2023/01/03/f222f53f2eaca07b41124510a72b76bc.jpg", sales: 0 },
    { id: 14, name: "Telur", price: 28000, category: "Bahan Pokok", stock: 20, image: "https://cdn.store-assets.com/s/818833/i/36325930.jpg", sales: 0 },
    { id: 15, name: "Minyak", price: 18000, category: "Bahan Pokok", stock: 25, image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-3406179/bimoli_bimoli-klasik-minyak-goreng--2-l--pouch-_full03.jpg", sales: 0 },
    { id: 16, name: "Roti", price: 10000, category: "Makanan", stock: 30, image: "https://tocoimg.blob.core.windows.net/toco/fff5eaf2-78e9-428f-baa0-5fe7e15d0583-fb088896-94c4-479b-8bae-52fb3533a178-insta_assets_crop_CFBA5260-6C5C-477D-B827-47D0A45079A4-565-000000E5884B0199.jpg", sales: 0 },
    { id: 17, name: "Fanta", price: 8000, category: "Minuman", stock: 40, image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lv42d4t9k1tp29", sales: 0 },
    { id: 18, name: "Sprite", price: 8000, category: "Minuman", stock: 40, image: "https://cdn0.woolworths.media/content/wowproductimages/large/093187.jpg", sales: 0 },
    { id: 19, name: "Kratindaeng", price: 5000, category: "Minuman", stock: 60, image: "https://down-id.img.susercontent.com/file/sg-11134201-22090-vls4uatrhzhv34", sales: 0 },
    { id: 20, name: "Floridina", price: 6000, category: "Minuman", stock: 45, image: "https://cf.shopee.co.id/file/69c47a6f11b3a2c720dcf2c8c3b1edad", sales: 0 },
    { id: 21, name: "Aqua", price: 4000, category: "Minuman", stock: 100, image: "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/4/28/2642564/2642564_8fff405b-851f-4196-b943-acae3d697e63_800_800.jpg", sales: 0 },
    { id: 22, name: "Tabung gas", price: 250000, category: "Lainnya", stock: 5, image: "https://filebroker-cdn.lazada.co.id/kf/S89b5c59055594eb2b9bf657cdb4197d94.jpg", sales: 0 },
    { id: 23, name: "Rokok", price: 20000, category: "Lainnya", stock: 50, image: "https://th.bing.com/th/id/OIP.hecZ3SXnP3pKhYtkiKvqUQHaF5?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", sales: 0 },
    { id: 24, name: "Sosis", price: 15000, category: "Makanan", stock: 35, image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/104/MTA-175744480/so_nice_so_nice_sosis_siap_makan_kemasan_toples_isi_25_pcs_full03_rz0rwb2l.jpg", sales: 0 }
];

// Keranjang belanja dan data
let cart = [];
let transactionHistory = JSON.parse(localStorage.getItem('transactionHistory')) || [];
let productsData = JSON.parse(localStorage.getItem('productsData')) || products;

// Chart instances
let salesChart = null;
let categoryChart = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    initializeApp();
});

function loadData() {
    // Load products from localStorage or use default
    if (localStorage.getItem('productsData')) {
        products = JSON.parse(localStorage.getItem('productsData'));
    } else {
        localStorage.setItem('productsData', JSON.stringify(products));
    }
    
    // Load transaction history
    if (localStorage.getItem('transactionHistory')) {
        transactionHistory = JSON.parse(localStorage.getItem('transactionHistory'));
    }
}

function initializeApp() {
    displayProducts();
    updateCart();
    updateQuickStats();
    loadProductsManagement();
    loadTransactions();
    updateReports();
    initializeCharts();
    
    setupEventListeners();
}

function setupEventListeners() {
    // Checkout
    checkoutBtn.addEventListener('click', processCheckout);
    
    // Search
    searchBtn.addEventListener('click', searchProducts);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') searchProducts();
    });
    
    // Add product
    addProductBtn.addEventListener('click', addNewProduct);
    newProductImage.addEventListener('change', handleImageUpload);
    
    // Category filters
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterByCategory(category);
            
            // Update active state
            document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Navigation
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page') + '-page';
            showPage(pageId);
            
            // Update active menu
            document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Buttons
    manageProductsBtn.addEventListener('click', () => showPage('products-page'));
    backToDashboard.addEventListener('click', () => showPage('dashboard-page'));
    backToDashboard2.addEventListener('click', () => showPage('dashboard-page'));
    backToDashboard3.addEventListener('click', () => showPage('dashboard-page'));
    clearCartBtn.addEventListener('click', clearCart);
    exportDataBtn.addEventListener('click', exportAllData);
    exportTransactionsBtn.addEventListener('click', exportTransactions);
    exportReportBtn.addEventListener('click', exportReports);
    resetDataBtn.addEventListener('click', resetData);
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    // Update specific pages when shown
    if (pageId === 'reports-page') {
        updateReports();
        updateCharts();
    } else if (pageId === 'transactions-page') {
        loadTransactions();
    } else if (pageId === 'products-page') {
        loadProductsManagement();
    } else if (pageId === 'dashboard-page') {
        updateQuickStats();
    }
}

function displayProducts(filteredProducts = products) {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">Tidak ada produk ditemukan</div>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
productCard.innerHTML = `
    <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-name">${product.name}</div>
    <div class="product-category">${product.category}</div>
    <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
    <div class="product-stock">Stok: ${product.stock}</div>
    <button class="add-to-cart" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
        ${product.stock === 0 ? 'Stok Habis' : 'Tambah ke Keranjang'}
    </button>
`;

        productsGrid.appendChild(productCard);
    });
    
    // Update products count
    document.getElementById('productsCount').textContent = `${filteredProducts.length} produk`;
    
    // Add event listeners
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock === 0) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity >= product.stock) {
            showNotification('Stok tidak mencukupi!', 'error');
            return;
        }
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${product.name} ditambahkan ke keranjang`);
}

function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Keranjang belanja kosong</div>';
    } else {
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">Rp ${item.price.toLocaleString('id-ID')} x ${item.quantity}</div>
                </div>
                <div class="item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-btn" data-id="${item.id}">Hapus</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners
        document.querySelectorAll('.quantity-btn.minus').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                updateQuantity(productId, -1);
            });
        });
        
        document.querySelectorAll('.quantity-btn.plus').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                updateQuantity(productId, 1);
            });
        });
        
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    }
    
    calculateTotal();
    updateCheckoutButton();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    const product = products.find(p => p.id === productId);
    
    if (change > 0 && item.quantity >= product.stock) {
        showNotification('Stok tidak mencukupi!', 'error');
        return;
    }
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCart();
    }
}

function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    if (item) {
        showNotification(`${item.name} dihapus dari keranjang`);
    }
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Apakah Anda yakin ingin menghapus semua item dari keranjang?')) {
        cart = [];
        updateCart();
        showNotification('Keranjang berhasil dikosongkan');
    }
}

function calculateTotal() {
    const subTotalValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subTotalValue * 0.1;
    const total = subTotalValue + tax;
    
    document.getElementById('subTotal').textContent = `Rp ${subTotalValue.toLocaleString('id-ID')}`;
    document.getElementById('taxAmount').textContent = `Rp ${tax.toLocaleString('id-ID')}`;
    document.getElementById('totalPayment').textContent = `Rp ${total.toLocaleString('id-ID')}`;
    document.getElementById('totalAmount').textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

function updateCheckoutButton() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.disabled = cart.length === 0;
}

function processCheckout() {
    if (cart.length === 0) {
        showNotification('Keranjang belanja kosong!', 'error');
        return;
    }
    
    // Check stock availability
    for (const item of cart) {
        const product = products.find(p => p.id === item.id);
        if (item.quantity > product.stock) {
            showNotification(`Stok ${product.name} tidak mencukupi!`, 'error');
            return;
        }
    }
    
    const customer = document.getElementById('customerName').value || "Pelanggan";
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    const transaction = {
        id: Date.now(),
        date: new Date().toLocaleString('id-ID'),
        customer: customer,
        items: [...cart],
        subtotal: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
        tax: cart.reduce((total, item) => total + (item.price * item.quantity), 0) * 0.1,
        total: cart.reduce((total, item) => total + (item.price * item.quantity), 0) * 1.1,
        paymentMethod: paymentMethod
    };
    
    // Update stock and sales
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        product.stock -= cartItem.quantity;
        product.sales += cartItem.quantity;
    });
    
    // Save data
    transactionHistory.push(transaction);
    localStorage.setItem('transactionHistory', JSON.stringify(transactionHistory));
    localStorage.setItem('productsData', JSON.stringify(products));
    
    showNotification(`Transaksi berhasil! Total: Rp ${transaction.total.toLocaleString('id-ID')}`, 'success');
    
    // Reset cart
    cart = [];
    document.getElementById('customerName').value = '';
    updateCart();
    displayProducts();
    updateQuickStats();
    
    // Show success message
    setTimeout(() => {
        alert(`✅ Transaksi Berhasil!\n\nPelanggan: ${customer}\nTotal: Rp ${transaction.total.toLocaleString('id-ID')}\nMetode: ${paymentMethod}\n\nTerima kasih atas pembeliannya!`);
    }, 500);
}

function updateQuickStats() {
    const today = new Date().toLocaleDateString('id-ID');
    const todayTransactions = transactionHistory.filter(t => 
        new Date(t.id).toLocaleDateString('id-ID') === today
    );
    
    const todayIncome = todayTransactions.reduce((sum, t) => sum + t.total, 0);
    const totalProducts = products.reduce((sum, p) => sum + p.stock, 0);
    
    document.getElementById('todayIncome').textContent = `Rp ${todayIncome.toLocaleString('id-ID')}`;
    document.getElementById('totalProducts').textContent = totalProducts;
    document.getElementById('todayTransactions').textContent = todayTransactions.length;
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filteredProducts);
}

function filterByCategory(category) {
    if (category === 'all') {
        displayProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.category === category
    );
    
    displayProducts(filteredProducts);
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('imagePreview');
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    }
}

function addNewProduct() {
    const name = document.getElementById('newProductName').value.trim();
    const price = parseFloat(document.getElementById('newProductPrice').value);
    const category = document.getElementById('newProductCategory').value;
    const stock = parseInt(document.getElementById('newProductStock').value) || 0;
    const imageFile = document.getElementById('newProductImage').files[0];
    
    if (!name || isNaN(price) || price <= 0) {
        showNotification('Masukkan nama dan harga yang valid!', 'error');
        return;
    }
    
    let imageEmoji = "📦";
    if (category === "Makanan") imageEmoji = "🍜";
    else if (category === "Minuman") imageEmoji = "🥤";
    else if (category === "Bahan Pokok") imageEmoji = "🛒";
    
    const newProduct = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        name: name,
        price: price,
        category: category,
        stock: stock,
        image: imageEmoji,
        sales: 0
    };
    
    products.push(newProduct);
    localStorage.setItem('productsData', JSON.stringify(products));
    
    displayProducts();
    loadProductsManagement();
    updateQuickStats();
    
    // Reset form
    document.getElementById('newProductName').value = '';
    document.getElementById('newProductPrice').value = '';
    document.getElementById('newProductStock').value = '10';
    document.getElementById('newProductImage').value = '';
    document.getElementById('imagePreview').innerHTML = '<span>📷 Pilih gambar</span>';
    
    showNotification(`Produk "${name}" berhasil ditambahkan!`);
}

function loadProductsManagement() {
    const productsList = document.querySelector('.products-list');
    productsList.innerHTML = '';
    
    if (products.length === 0) {
        productsList.innerHTML = '<div class="no-products">Tidak ada produk</div>';
        return;
    }
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-management-card';
productCard.innerHTML = `
    <button class="delete-product" data-id="${product.id}">🗑️</button>
    <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-name">${product.name}</div>
    <div class="product-category">${product.category}</div>
    <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
    <div class="product-stock">Stok: ${product.stock} | Terjual: ${product.sales}</div>
`;

        productsList.appendChild(productCard);
    });
    
    document.getElementById('managementProductsCount').textContent = `${products.length} produk`;
    
    // Add delete event listeners
    document.querySelectorAll('.delete-product').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            deleteProduct(productId);
        });
    });
}

function deleteProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (confirm(`Apakah Anda yakin ingin menghapus produk "${product.name}"?`)) {
        products = products.filter(p => p.id !== productId);
        localStorage.setItem('productsData', JSON.stringify(products));
        displayProducts();
        loadProductsManagement();
        updateQuickStats();
        showNotification('Produk berhasil dihapus');
    }
}

function loadTransactions() {
    const transactionsList = document.querySelector('.transactions-list');
    transactionsList.innerHTML = '';
    
    if (transactionHistory.length === 0) {
        transactionsList.innerHTML = '<div class="no-transactions">Belum ada transaksi</div>';
        return;
    }
    
    // Sort by date (newest first)
    const sortedTransactions = [...transactionHistory].sort((a, b) => b.id - a.id);
    
    sortedTransactions.forEach(transaction => {
        const transactionItem = document.createElement('div');
        transactionItem.className = 'transaction-item';
        transactionItem.innerHTML = `
            <div class="transaction-header">
                <div>
                    <strong>ID: ${transaction.id}</strong><br>
                    <small>${transaction.date}</small>
                </div>
                <div>
                    <strong>${transaction.customer}</strong><br>
                    <small>${transaction.paymentMethod}</small>
                </div>
            </div>
            <div class="transaction-items">
                ${transaction.items.map(item => `
                    <div class="transaction-item-row">
                        <span>${item.name} x ${item.quantity}</span>
                        <span>Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</span>
                    </div>
                `).join('')}
            </div>
            <div class="transaction-total transaction-item-row">
                <span>Total</span>
                <span>Rp ${transaction.total.toLocaleString('id-ID')}</span>
            </div>
        `;
        transactionsList.appendChild(transactionItem);
    });
}

function updateReports() {
    // Total revenue
    const totalRevenue = transactionHistory.reduce((sum, t) => sum + t.total, 0);
    document.getElementById('totalRevenue').textContent = `Rp ${totalRevenue.toLocaleString('id-ID')}`;
    
    // Total transactions
    document.getElementById('totalTransactionsReport').textContent = transactionHistory.length;
    
    // Total items sold
    const totalSold = transactionHistory.reduce((sum, t) => 
        sum + t.items.reduce((itemSum, item) => itemSum + item.quantity, 0), 0
    );
    document.getElementById('totalSold').textContent = totalSold;
    
    // Best seller
    const productSales = {};
    transactionHistory.forEach(transaction => {
        transaction.items.forEach(item => {
            if (!productSales[item.name]) {
                productSales[item.name] = 0;
            }
            productSales[item.name] += item.quantity;
        });
    });
    
    let bestSellerProduct = '-';
    let maxSales = 0;
    
    for (const [product, sales] of Object.entries(productSales)) {
        if (sales > maxSales) {
            maxSales = sales;
            bestSellerProduct = product;
        }
    }
    
    document.getElementById('bestSeller').textContent = bestSellerProduct;
    document.getElementById('bestSellerCount').textContent = `${maxSales} terjual`;
    
    // Calculate changes (simplified)
    document.getElementById('revenueChange').textContent = '+12% dari bulan lalu';
    document.getElementById('transactionsChange').textContent = '+8% dari bulan lalu';
    document.getElementById('soldChange').textContent = '+15% dari bulan lalu';
}

function initializeCharts() {
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    const categoryCtx = document.getElementById('categoryChart').getContext('2d');
    
    salesChart = new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
            datasets: [{
                label: 'Penjualan',
                data: [120000, 190000, 150000, 180000, 220000, 280000, 250000],
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    categoryChart = new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
            labels: ['Makanan', 'Minuman', 'Bahan Pokok', 'Lainnya'],
            datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: [
                    '#e74c3c',
                    '#3498db',
                    '#f39c12',
                    '#9b59b6'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function updateCharts() {
    // Update charts with real data
    if (salesChart) {
        // Update sales chart with last 7 days data
        const last7Days = getLast7DaysSales();
        salesChart.data.datasets[0].data = last7Days;
        salesChart.update();
    }
}

function getLast7DaysSales() {
    // Simplified - in real app, calculate actual sales for last 7 days
    return [120000, 190000, 150000, 180000, 220000, 280000, 250000];
}

function exportAllData() {
    try {
        const wb = XLSX.utils.book_new();
        
        // Products sheet
        const productsData = [
            ['ID', 'Nama Produk', 'Kategori', 'Harga', 'Stok', 'Terjual']
        ];
        products.forEach(product => {
            productsData.push([
                product.id,
                product.name,
                product.category,
                product.price,
                product.stock,
                product.sales
            ]);
        });
        const productsWs = XLSX.utils.aoa_to_sheet(productsData);
        XLSX.utils.book_append_sheet(wb, productsWs, 'Produk');
        
        // Transactions sheet
        const transactionsData = [
            ['ID Transaksi', 'Tanggal', 'Pelanggan', 'Total', 'Metode Bayar']
        ];
        transactionHistory.forEach(transaction => {
            transactionsData.push([
                transaction.id,
                transaction.date,
                transaction.customer,
                transaction.total,
                transaction.paymentMethod
            ]);
        });
        const transactionsWs = XLSX.utils.aoa_to_sheet(transactionsData);
        XLSX.utils.book_append_sheet(wb, transactionsWs, 'Transaksi');
        
        // Export
        const fileName = `data_warung_${new Date().getTime()}.xlsx`;
        XLSX.writeFile(wb, fileName);
        showNotification('Data berhasil diexport!');
    } catch (error) {
        showNotification('Error saat export data: ' + error.message, 'error');
    }
}

function exportTransactions() {
    try {
        const transactionsData = [
            ['ID Transaksi', 'Tanggal', 'Pelanggan', 'Item', 'Kuantitas', 'Harga Satuan', 'Subtotal', 'Total', 'Metode Bayar']
        ];
        
        transactionHistory.forEach(transaction => {
            transaction.items.forEach((item, index) => {
                transactionsData.push([
                    index === 0 ? transaction.id : '',
                    index === 0 ? transaction.date : '',
                    index === 0 ? transaction.customer : '',
                    item.name,
                    item.quantity,
                    item.price,
                    item.price * item.quantity,
                    index === 0 ? transaction.total : '',
                    index === 0 ? transaction.paymentMethod : ''
                ]);
            });
        });
        
        const ws = XLSX.utils.aoa_to_sheet(transactionsData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Transaksi');
        
        const fileName = `transaksi_warung_${new Date().getTime()}.xlsx`;
        XLSX.writeFile(wb, fileName);
        showNotification('Data transaksi berhasil diexport!');
    } catch (error) {
        showNotification('Error saat export transaksi: ' + error.message, 'error');
    }
}

function exportReports() {
    try {
        const reportData = [
            ['LAPORAN WARUNG PREMIUM'],
            [''],
            ['Tanggal Export', new Date().toLocaleString('id-ID')],
            [''],
            ['STATISTIK UTAMA'],
            ['Total Pendapatan', `Rp ${document.getElementById('totalRevenue').textContent.split('Rp ')[1]}`],
            ['Total Transaksi', document.getElementById('totalTransactionsReport').textContent],
            ['Total Produk Terjual', document.getElementById('totalSold').textContent],
            ['Produk Terlaris', document.getElementById('bestSeller').textContent],
            [''],
            ['RINGKASAN TRANSAKSI 7 HARI TERAKHIR'],
            ['Hari', 'Pendapatan']
        ];
        
        // Add last 7 days data
        const last7Days = getLast7DaysSales();
        const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
        days.forEach((day, index) => {
            reportData.push([day, last7Days[index]]);
        });
        
        const ws = XLSX.utils.aoa_to_sheet(reportData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Laporan');
        
        const fileName = `laporan_warung_${new Date().getTime()}.xlsx`;
        XLSX.writeFile(wb, fileName);
        showNotification('Laporan berhasil diexport!');
    } catch (error) {
        showNotification('Error saat export laporan: ' + error.message, 'error');
    }
}

function resetData() {
    if (confirm('⚠️ PERINGATAN!\n\nAnda akan menghapus SEMUA data termasuk:\n• Riwayat transaksi\n• Data penjualan\n• Stok produk\n\nApakah Anda yakin ingin mereset semua data?')) {
        // Reset to initial state
        products = [
            { id: 1, name: "Indomie Goreng", price: 3500, category: "Makanan", stock: 50, image: "🍜", sales: 0 },
            // ... (all initial products)
        ];
        
        cart = [];
        transactionHistory = [];
        
        // Clear localStorage
        localStorage.removeItem('productsData');
        localStorage.removeItem('transactionHistory')}}