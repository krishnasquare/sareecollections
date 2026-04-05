/**
 * SareeLux - Premium Saree E-Commerce
 * Main Application JavaScript
 */

// ========================================
// Configuration
// ========================================
const CONFIG = {
    // Replace with your published Google Sheet CSV URL
    // File > Share > Publish to web > Select CSV > Copy link
    googleSheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT_MpK6iC5fK8R8Y9PqF7H2N1A/pub?output=csv',
    whatsappNumber: '919876543210'
};

// Fallback Sample Products
const SAMPLE_PRODUCTS = [
    {
        id: 1,
        name: "Banarasi Silk Royal",
        category: "Silk",
        price: 8500,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
            "https://images.unsplash.com/photo-1583391728516-b7288e82ebf5?w=800&q=80"
        ],
        description: "Exquisite handwoven Banarasi silk with intricate golden zari work featuring traditional motifs. This masterpiece showcases the finest craftsmanship from Varanasi weavers, perfect for weddings and grand celebrations.",
        details: [
            "Pure silk with gold zari",
            "Handwoven in Varanasi",
            "Blouse piece included",
            "Dry clean only"
        ],
        available: true,
        stock: 5
    },
    {
        id: 2,
        name: "Mysore Silk Classic",
        category: "Silk",
        price: 6800,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
        ],
        description: "Pure mulberry silk with traditional South Indian motifs. Known for its lustrous finish and rich colors, this timeless classic represents the heritage of Mysore silk weaving.",
        details: [
            "100% Mulberry silk",
            "Traditional motifs",
            "With blouse piece",
            "Easy maintenance"
        ],
        available: true,
        stock: 8
    },
    {
        id: 3,
        name: "Cotton Summer Breeze",
        category: "Cotton",
        price: 2200,
        image: "https://images.unsplash.com/photo-1618932260643-ee32b53e2f45?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1618932260643-ee32b53e2f45?w=800&q=80",
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80"
        ],
        description: "Lightweight breathable cotton perfect for daily wear. Features beautiful floral block print in soft pastels, ideal for summer occasions and casual gatherings.",
        details: [
            "Pure cotton fabric",
            "Block print design",
            "Breathable & comfortable",
            "Machine washable"
        ],
        available: true,
        stock: 15
    },
    {
        id: 4,
        name: "Chiffon Elegance",
        category: "Chiffon",
        price: 3800,
        image: "https://images.unsplash.com/photo-1583391728516-b7288e82ebf5?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1583391728516-b7288e82ebf5?w=800&q=80",
            "https://images.unsplash.com/photo-1618932142694-6c749c00b31f?w=800&q=80"
        ],
        description: "Flowing chiffon with delicate floral print. Light as a feather with a graceful fall that enhances your elegance for evening parties and formal events.",
        details: [
            "Premium chiffon",
            "Delicate floral print",
            "Sequin border",
            "Dry clean recommended"
        ],
        available: true,
        stock: 6
    },
    {
        id: 5,
        name: "Georgette Party Sparkle",
        category: "Georgette",
        price: 4200,
        image: "https://images.unsplash.com/photo-1610189012906-2c8a2bfcffa2?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1610189012906-2c8a2bfcffa2?w=800&q=80",
            "https://images.unsplash.com/photo-1609651635682-3348d2b94f0c?w=800&q=80"
        ],
        description: "Shimmer georgette with subtle sparkle work. Beautiful drape with精心 embellishments that make you the star of any celebration.",
        details: [
            "Heavy georgette",
            "Embroidered details",
            "Heavy work blouse",
            "All occasions"
        ],
        available: true,
        stock: 4
    },
    {
        id: 6,
        name: "Tussar Silk Heritage",
        category: "Silk",
        price: 7200,
        image: "https://images.unsplash.com/photo-1608296694063-ee002f3c5b9c?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1608296694063-ee002f3c5b9c?w=800&q=80",
            "https://images.unsplash.com/photo-1610189001878-18fc7c0b6fc7?w=800&q=80"
        ],
        description: "Rich tussar silk with tribal prints and natural golden hue. The textured weave creates a unique look that blends tradition with contemporary style.",
        details: [
            "Natural tussar silk",
            "Tribal print art",
            "With blouse piece",
            "Premium quality"
        ],
        available: true,
        stock: 3
    },
    {
        id: 7,
        name: "Cotton Lucknowi Chikankari",
        category: "Cotton",
        price: 3500,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
            "https://images.unsplash.com/photo-1618932260643-ee32b53e2f45?w=800&q=80"
        ],
        description: "Delicate Lucknowi chikankari work on fine cotton. The intricate thread work showcases the legendary craftsmanship of Lucknow artisans.",
        details: [
            "Fine cotton base",
            "Hand chikankari",
            "Intricate threadwork",
            "Ready to wear"
        ],
        available: true,
        stock: 7
    },
    {
        id: 8,
        name: "Chiffon Evening Dream",
        category: "Chiffon",
        price: 4500,
        image: "https://images.unsplash.com/photo-1618932142694-6c749c00b31f?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1618932142694-6c749c00b31f?w=800&q=80",
            "https://images.unsplash.com/photo-1583391728516-b7288e82ebf5?w=800&q=80"
        ],
        description: "Sequinned chiffon for evening soirees. Stunning embellishments that catch every light, making you the center of attention.",
        details: [
            "Premium chiffon",
            "Heavy sequin work",
            "Matching blouse",
            "Wedding guest special"
        ],
        available: true,
        stock: 2
    },
    {
        id: 9,
        name: "Georgette Festive Celebration",
        category: "Georgette",
        price: 3800,
        image: "https://images.unsplash.com/photo-1609651635682-3348d2b94f0c?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1609651635682-3348d2b94f0c?w=800&q=80",
            "https://images.unsplash.com/photo-1610189012906-2c8a2bfcffa2?w=800&q=80"
        ],
        description: "Vibrant georgette with festive prints and bright colors. Playful patterns perfect for celebrations, festivals, and family gatherings.",
        details: [
            "Festial collection",
            "Vibrant colors",
            "Comfortable drape",
            "All celebrations"
        ],
        available: true,
        stock: 10
    },
    {
        id: 10,
        name: "Kanjivaram Temple Border",
        category: "Silk",
        price: 12500,
        image: "https://images.unsplash.com/photo-1610189001878-18fc7c0b6fc7?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1610189001878-18fc7c0b6fc7?w=800&q=80",
            "https://images.unsplash.com/photo-1608296694063-ee002f3c5b9c?w=800&q=80"
        ],
        description: "The gold standard of silk sarees with heavy zari work and traditional temple border. A regal piece that makes a powerful statement.",
        details: [
            "Pure Kanjivaram silk",
            "Temple border design",
            "Heavy zari work",
            "Bridal collection"
        ],
        available: true,
        stock: 1
    },
    {
        id: 11,
        name: "Linen Cotton Natural",
        category: "Cotton",
        price: 2800,
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=800&q=80",
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80"
        ],
        description: "Sustainable linen cotton blend with earthy texture. A minimal elegance choice for the modern woman who values sustainability.",
        details: [
            "Linen cotton blend",
            "Natural texture",
            "Eco-friendly",
            "Office wear"
        ],
        available: true,
        stock: 12
    },
    {
        id: 12,
        name: "Organza Dream",
        category: "Chiffon",
        price: 5200,
        image: "https://images.unsplash.com/photo-1602710317700-25a5e4109862?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1602710317700-25a5e4109862?w=800&q=80",
            "https://images.unsplash.com/photo-1618932142694-6c749c00b31f?w=800&q=80"
        ],
        description: "Delicate organza with intricate embroidery. Sheer beauty with detailed threadwork for a dreamy, ethereal look.",
        details: [
            "Pure organza",
            "Heavy embroidery",
            "Bridal collection",
            "Destination wedding"
        ],
        available: true,
        stock: 3
    }
];

// ========================================
// Application State
// ========================================
let products = [];
let cart = JSON.parse(localStorage.getItem('sareeCart')) || [];
let currentFilter = 'all';
let currentProduct = null;

// ========================================
// DOM Elements
// ========================================
const elements = {
    mainContent: document.getElementById('mainContent'),
    productDetail: document.getElementById('productDetail'),
    productDetailContent: document.getElementById('productDetailContent'),
    productsGrid: document.getElementById('productsGrid'),
    loadingState: document.getElementById('loadingState'),
    emptyState: document.getElementById('emptyState'),
    cartBtn: document.getElementById('cartBtn'),
    cartSidebar: document.getElementById('cartSidebar'),
    cartOverlay: document.getElementById('cartOverlay'),
    closeCart: document.getElementById('closeCart'),
    cartItems: document.getElementById('cartItems'),
    emptyCart: document.getElementById('emptyCart'),
    cartTotal: document.getElementById('cartTotal'),
    cartBadge: document.getElementById('cartBadge'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    checkoutModal: document.getElementById('checkoutModal'),
    closeModal: document.getElementById('closeModal'),
    checkoutForm: document.getElementById('checkoutForm'),
    orderSummary: document.getElementById('orderSummary'),
    modalTotal: document.getElementById('modalTotal'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toastMessage'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileMenu: document.getElementById('mobileMenu')
};

// ========================================
// Initialization
// ========================================
async function init() {
    await loadProducts();
    renderProducts();
    updateCartUI();
    setupEventListeners();
    initScrollAnimations();
}

// ========================================
// Product Loading
// ========================================
async function loadProducts() {
    try {
        const response = await fetch(CONFIG.googleSheetUrl);
        if (!response.ok) throw new Error('Failed to fetch');
        const csv = await response.text();
        products = parseCSV(csv);
        if (products.length === 0) throw new Error('No products');
    } catch (error) {
        console.log('Using sample products:', error.message);
        products = [...SAMPLE_PRODUCTS];
    } finally {
        elements.loadingState.classList.add('hidden');
    }
}

function parseCSV(csv) {
    const lines = csv.trim().split('\n');
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        if (values.length >= 5) {
            const product = {
                id: parseInt(values[0]) || i,
                name: values[1]?.replace(/"/g, '').trim() || 'Unnamed Product',
                category: values[2]?.replace(/"/g, '').trim() || 'Silk',
                price: parseInt(values[3]?.replace(/"/g, '').replace(/[₹,]/g, '')) || 1000,
                image: values[4]?.replace(/"/g, '').trim() || '',
                images: [
                    values[4]?.replace(/"/g, '').trim() || '',
                    values[4]?.replace(/"/g, '').trim() || ''
                ],
                description: values[5]?.replace(/"/g, '').trim() || '',
                details: values[6]?.replace(/"/g, '').trim()?.split('|') || [],
                available: values[7]?.replace(/"/g, '').trim().toLowerCase() !== 'false',
                stock: parseInt(values[8]) || 10
            };
            if (product.image && product.name) result.push(product);
        }
    }
    return result;
}

// ========================================
// Render Products
// ========================================
function renderProducts() {
    const filtered = currentFilter === 'all'
        ? products
        : products.filter(p => p.category.toLowerCase() === currentFilter.toLowerCase());

    if (filtered.length === 0) {
        elements.productsGrid.innerHTML = '';
        elements.emptyState.classList.remove('hidden');
        return;
    }

    elements.emptyState.classList.add('hidden');
    elements.productsGrid.innerHTML = filtered.map(product => `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <div class="card-inner bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl">
                <div class="product-image relative h-72 overflow-hidden bg-gray-100">
                    <img src="${product.image}" alt="${product.name}"
                         class="w-full h-full object-cover"
                         onerror="this.src='https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80'">
                    <span class="absolute top-4 left-4 bg-luxury-burgundy text-luxury-gold-pale text-xs px-3 py-1 rounded-full font-medium">
                        ${product.category}
                    </span>
                    ${!product.available ? '<span class="absolute top-4 right-4 bg-gray-500 text-white text-xs px-3 py-1 rounded-full font-medium">Sold Out</span>' : ''}
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span class="text-white font-medium">View Details</span>
                    </div>
                </div>
                <div class="p-5">
                    <h3 class="font-heading font-semibold text-luxury-burgundy text-lg mb-2 truncate">${product.name}</h3>
                    <p class="text-luxury-charcoal/60 text-sm mb-4 line-clamp-2">${product.description}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xl font-heading font-bold text-luxury-gold">₹${product.price.toLocaleString('en-IN')}</span>
                        <button onclick="event.stopPropagation(); addToCart(${product.id})"
                                class="bg-luxury-burgundy text-luxury-ivory px-5 py-2.5 rounded-full text-sm font-medium hover:bg-luxury-burgundy-dark transition hover:shadow-lg ${!product.available ? 'opacity-50 cursor-not-allowed' : ''}"
                                ${!product.available ? 'disabled' : ''}>
                            ${product.available ? 'Add to Cart' : 'Sold Out'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// Product Detail Page
// ========================================
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProduct = product;

    elements.productDetailContent.innerHTML = `
        <!-- Image Gallery -->
        <div class="product-gallery">
            <div class="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl mb-4">
                <img id="mainImage" src="${product.images[0]}" alt="${product.name}"
                     class="w-full h-full object-cover cursor-pointer"
                     onerror="this.src='https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80'">
            </div>
            <div class="flex gap-3 overflow-x-auto pb-2">
                ${product.images.map((img, index) => `
                    <button onclick="changeImage('${img}')"
                            class="thumbnail-item flex-shrink-0 w-20 h-24 rounded-lg overflow-hidden border-2 border-transparent hover:border-luxury-gold transition">
                        <img src="${img}" alt="Thumbnail ${index + 1}" class="w-full h-full object-cover"
                             onerror="this.src='https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&q=80'">
                    </button>
                `).join('')}
            </div>
        </div>

        <!-- Product Info -->
        <div class="flex flex-col">
            <span class="inline-block self-start bg-luxury-burgundy text-luxury-gold-pale text-xs px-3 py-1 rounded-full font-medium mb-4">
                ${product.category}
            </span>
            <h1 class="text-3xl sm:text-4xl font-heading font-bold text-luxury-burgundy mb-4">${product.name}</h1>

            <div class="flex items-center gap-4 mb-6">
                <span class="text-4xl font-heading font-bold text-luxury-gold">₹${product.price.toLocaleString('en-IN')}</span>
                ${product.available ?
                    `<span class="bg-green-100 text-green-700 text-sm px-4 py-1.5 rounded-full font-medium">In Stock (${product.stock} left)</span>` :
                    `<span class="bg-red-100 text-red-700 text-sm px-4 py-1.5 rounded-full font-medium">Out of Stock</span>`
                }
            </div>

            <p class="text-luxury-charcoal/70 text-base leading-relaxed mb-8">${product.description}</p>

            <!-- Product Details -->
            <div class="bg-luxury-cream rounded-xl p-6 mb-8">
                <h3 class="font-heading font-semibold text-luxury-burgundy text-lg mb-4">Product Details</h3>
                <ul class="space-y-3">
                    ${product.details.map(detail => `
                        <li class="flex items-center gap-3 text-luxury-charcoal/70">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            ${detail}
                        </li>
                    `).join('')}
                </ul>
            </div>

            <!-- Quantity & Add to Cart -->
            <div class="mt-auto">
                <div class="flex items-center gap-4 mb-6">
                    <span class="text-luxury-charcoal/70 font-medium">Quantity:</span>
                    <div class="flex items-center gap-3 bg-luxury-cream rounded-full px-2">
                        <button onclick="decreaseQty()" class="qty-btn w-10 h-10 flex items-center justify-center text-luxury-burgundy hover:bg-luxury-gold-pale rounded-full transition">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                            </svg>
                        </button>
                        <span id="detailQty" class="w-12 text-center font-medium text-luxury-burgundy">1</span>
                        <button onclick="increaseQty()" class="qty-btn w-10 h-10 flex items-center justify-center text-luxury-burgundy hover:bg-luxury-gold-pale rounded-full transition">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="flex gap-4">
                    <button onclick="addToCartFromDetail()"
                            class="flex-1 bg-luxury-burgundy text-luxury-ivory py-4 rounded-full font-semibold text-lg hover:bg-luxury-burgundy-dark transition hover:shadow-xl ${!product.available ? 'opacity-50 cursor-not-allowed' : ''}"
                            ${!product.available ? 'disabled' : ''}>
                        ${product.available ? 'Add to Cart' : 'Sold Out'}
                    </button>
                    <button onclick="addToCartFromDetail()" class="p-4 bg-luxury-gold text-luxury-burgundy-dark rounded-full hover:shadow-xl transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;

    elements.mainContent.classList.add('hidden');
    elements.productDetail.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let detailQuantity = 1;

function increaseQty() {
    if (detailQuantity < 10) {
        detailQuantity++;
        document.getElementById('detailQty').textContent = detailQuantity;
    }
}

function decreaseQty() {
    if (detailQuantity > 1) {
        detailQuantity--;
        document.getElementById('detailQty').textContent = detailQuantity;
    }
}

function changeImage(src) {
    document.getElementById('mainImage').src = src;
}

function addToCartFromDetail() {
    if (!currentProduct || !currentProduct.available) return;

    for (let i = 0; i < detailQuantity; i++) {
        addToCart(currentProduct.id);
    }
    detailQuantity = 1;
    document.getElementById('detailQty').textContent = 1;
}

// ========================================
// Navigation
// ========================================
function showHome() {
    elements.productDetail.classList.add('hidden');
    elements.mainContent.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCollection() {
    elements.productDetail.classList.add('hidden');
    elements.mainContent.classList.remove('hidden');
    document.getElementById('collection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========================================
// Cart Functions
// ========================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.available) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity = Math.min(existingItem.quantity + 1, 10);
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity = Math.max(0, Math.min(item.quantity + delta, 10));
    if (item.quantity === 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('sareeCart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    elements.cartBadge.textContent = totalItems;
    elements.cartTotal.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;
    elements.modalTotal.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;

    elements.checkoutBtn.disabled = cart.length === 0;

    if (cart.length === 0) {
        elements.cartItems.classList.add('hidden');
        elements.emptyCart.classList.remove('hidden');
        elements.orderSummary.innerHTML = '<p class="text-luxury-charcoal/60 text-sm">No items in cart</p>';
    } else {
        elements.cartItems.classList.remove('hidden');
        elements.emptyCart.classList.add('hidden');

        elements.cartItems.innerHTML = cart.map(item => `
            <div class="cart-item flex gap-4 bg-white p-3 rounded-xl shadow-sm">
                <img src="${item.image}" alt="${item.name}"
                     class="w-20 h-20 object-cover rounded-lg"
                     onerror="this.src='https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&q=80'">
                <div class="flex-1">
                    <h4 class="font-heading font-semibold text-luxury-burgundy text-sm truncate">${item.name}</h4>
                    <p class="text-luxury-gold font-bold">₹${item.price.toLocaleString('en-IN')}</p>
                    <div class="flex items-center gap-2 mt-2">
                        <button onclick="updateQuantity(${item.id}, -1)"
                                class="qty-btn w-7 h-7 bg-luxury-cream rounded-full flex items-center justify-center text-luxury-burgundy hover:bg-luxury-gold-pale transition">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                            </svg>
                        </button>
                        <span class="text-luxury-charcoal font-medium w-6 text-center">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)"
                                class="qty-btn w-7 h-7 bg-luxury-cream rounded-full flex items-center justify-center text-luxury-burgundy hover:bg-luxury-gold-pale transition">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-luxury-charcoal/40 hover:text-red-500 transition self-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        `).join('');

        elements.orderSummary.innerHTML = cart.map(item => `
            <div class="flex justify-between">
                <span>${item.name} x${item.quantity}</span>
                <span>₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
            </div>
        `).join('');
    }
}

// ========================================
// Toast Notification
// ========================================
function showToast(message) {
    elements.toastMessage.textContent = message;
    elements.toast.classList.add('show');
    setTimeout(() => elements.toast.classList.remove('show'), 2500);
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// ========================================
// Event Listeners
// ========================================
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            renderProducts();
            showCollection();
        });
    });

    // Cart toggle
    elements.cartBtn.addEventListener('click', () => {
        elements.cartSidebar.classList.add('open');
        elements.cartOverlay.classList.remove('hidden');
    });

    const closeCartFn = () => {
        elements.cartSidebar.classList.remove('open');
        elements.cartOverlay.classList.add('hidden');
    };

    elements.closeCart.addEventListener('click', closeCartFn);
    elements.cartOverlay.addEventListener('click', closeCartFn);

    // Checkout modal
    elements.checkoutBtn.addEventListener('click', () => {
        elements.checkoutModal.classList.add('open');
    });

    elements.closeModal.addEventListener('click', () => {
        elements.checkoutModal.classList.remove('open');
    });

    elements.checkoutModal.addEventListener('click', (e) => {
        if (e.target === elements.checkoutModal) {
            elements.checkoutModal.classList.remove('open');
        }
    });

    // Checkout form
    elements.checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(elements.checkoutForm);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const address = formData.get('address');

        let message = `Hello SareeLux! I'd like to order:%0A%0A`;
        cart.forEach(item => {
            message += `• ${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toLocaleString('en-IN')}%0A`;
        });
        message += `%0ATotal: ₹${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString('en-IN')}%0A%0A`;
        message += `Customer: ${name}%0A`;
        message += `Phone: ${phone}%0A`;
        message += `Address: ${address}`;

        const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');

        elements.checkoutModal.classList.remove('open');
        cart = [];
        saveCart();
        updateCartUI();
        showToast('Order sent successfully!');
    });

    // Mobile menu
    elements.mobileMenuBtn.addEventListener('click', () => {
        elements.mobileMenu.classList.toggle('hidden');
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                elements.mobileMenu.classList.add('hidden');
            }
        });
    });
}

// ========================================
// Global Functions
// ========================================
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.showProductDetail = showProductDetail;
window.showHome = showHome;
window.showCollection = showCollection;
window.increaseQty = increaseQty;
window.decreaseQty = decreaseQty;
window.changeImage = changeImage;
window.addToCartFromDetail = addToCartFromDetail;

// ========================================
// Start Application
// ========================================
init();