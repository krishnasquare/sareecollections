import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'
import CartSidebar from './components/CartSidebar'
import CheckoutModal from './components/CheckoutModal'
import Toast from './components/Toast'
import { products as allProducts } from './data/products'

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('sareeCart')
    return saved ? JSON.parse(saved) : []
  })
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })
  const [currentFilter, setCurrentFilter] = useState('All')
  const [showProductDetail, setShowProductDetail] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    localStorage.setItem('sareeCart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    showToast(`${product.name} added to cart!`)
  }

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === productId) {
          const newQty = Math.max(0, Math.min(item.quantity + delta, 10))
          return { ...item, quantity: newQty }
        }
        return item
      }).filter(item => item.quantity > 0)
    })
  }

  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => setToast({ show: false, message: '' }), 2500)
  }

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleCheckout = (formData) => {
    const { name, phone, address } = formData
    let message = `Hello SareeLux! I'd like to order:%0A%0A`
    cart.forEach(item => {
      message += `• ${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toLocaleString('en-IN')}%0A`
    })
    message += `%0ATotal: ₹${cartTotal.toLocaleString('en-IN')}%0A%0A`
    message += `Customer: ${name}%0A`
    message += `Phone: ${phone}%0A`
    message += `Address: ${address}`

    const whatsappUrl = `https://wa.me/919876543210?text=${message}`
    window.open(whatsappUrl, '_blank')

    setCart([])
    setIsCheckoutOpen(false)
    showToast('Order sent successfully!')
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setShowProductDetail(true)
  }

  const filteredProducts = currentFilter === 'All'
    ? allProducts
    : allProducts.filter(p => p.category.toLowerCase() === currentFilter.toLowerCase())

  return (
    <div className="min-h-screen">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Hero />

      <Products
        products={filteredProducts}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
        onProductClick={handleProductClick}
        onAddToCart={addToCart}
      />

      <About />

      <Footer />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={() => {
          setIsCartOpen(false)
          setIsCheckoutOpen(true)
        }}
        cartTotal={cartTotal}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        cartTotal={cartTotal}
        onSubmit={handleCheckout}
      />

      <Toast show={toast.show} message={toast.message} />

      {/* Product Detail Modal */}
      <AnimatePresence>
        {showProductDetail && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowProductDetail(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[var(--color-ivory)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <button
                  onClick={() => setShowProductDetail(false)}
                  className="flex items-center gap-2 text-[var(--color-burgundy)] hover:text-[var(--color-gold)] transition mb-6"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Collection
                </button>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image Gallery */}
                  <div>
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl mb-4">
                      <img
                        src={selectedProduct.images[0]}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex gap-3 overflow-x-auto">
                      {selectedProduct.images.map((img, idx) => (
                        <button
                          key={idx}
                          className="flex-shrink-0 w-20 h-24 rounded-lg overflow-hidden border-2 border-transparent hover:border-[var(--color-gold)] transition"
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col">
                    <span className="inline-block self-start bg-[var(--color-burgundy)] text-[var(--color-gold-pale)] text-xs px-3 py-1 rounded-full font-medium mb-4">
                      {selectedProduct.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-burgundy)] mb-4">
                      {selectedProduct.name}
                    </h2>

                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-heading font-bold text-[var(--color-gold)]">
                        ₹{selectedProduct.price.toLocaleString('en-IN')}
                      </span>
                      {selectedProduct.available ? (
                        <span className="bg-green-100 text-green-700 text-sm px-4 py-1.5 rounded-full font-medium">
                          In Stock ({selectedProduct.stock} left)
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-700 text-sm px-4 py-1.5 rounded-full font-medium">
                          Out of Stock
                        </span>
                      )}
                    </div>

                    <p className="text-[var(--color-charcoal)]/70 text-base leading-relaxed mb-6">
                      {selectedProduct.description}
                    </p>

                    <div className="bg-[var(--color-cream)] rounded-xl p-6 mb-6">
                      <h3 className="font-heading font-semibold text-[var(--color-burgundy)] text-lg mb-4">Product Details</h3>
                      <ul className="space-y-3">
                        {selectedProduct.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-[var(--color-charcoal)]/70">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(selectedProduct)
                        setShowProductDetail(false)
                      }}
                      className="w-full bg-[var(--color-burgundy)] text-[var(--color-ivory)] py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-burgundy-dark)] transition hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App