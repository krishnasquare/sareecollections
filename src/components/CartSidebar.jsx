import { motion, AnimatePresence } from 'framer-motion'

export default function CartSidebar({ isOpen, onClose, cart, onUpdateQuantity, onRemove, onCheckout, cartTotal }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay fixed inset-0 bg-black/60 z-50 ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside className={`cart-sidebar fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[var(--color-ivory)] z-50 shadow-2xl flex flex-col`}>
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-gold-pale)]/50">
          <h3 className="text-xl font-heading font-bold text-[var(--color-burgundy)]">Your Cart</h3>
          <button onClick={onClose} className="p-2 text-[var(--color-charcoal)]/60 hover:text-[var(--color-burgundy)] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[var(--color-gold-pale)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-[var(--color-charcoal)]/60 text-lg">Your cart is empty</p>
              <p className="text-[var(--color-charcoal)]/40 text-sm">Add some beautiful sarees</p>
            </div>
          ) : (
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="cart-item flex gap-4 bg-white p-3 rounded-xl shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-[var(--color-burgundy)] text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-[var(--color-gold)] font-bold">
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="qty-btn w-7 h-7 bg-[var(--color-cream)] rounded-full flex items-center justify-center text-[var(--color-burgundy)] transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="text-[var(--color-charcoal)] font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="qty-btn w-7 h-7 bg-[var(--color-cream)] rounded-full flex items-center justify-center text-[var(--color-burgundy)] transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-[var(--color-charcoal)]/40 hover:text-red-500 transition self-start"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[var(--color-gold-pale)]/50 bg-[var(--color-cream)]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[var(--color-charcoal)]/70 text-lg">Subtotal</span>
            <span className="text-2xl font-heading font-bold text-[var(--color-gold)]">
              ₹{cartTotal.toLocaleString('en-IN')}
            </span>
          </div>
          <button
            onClick={onCheckout}
            disabled={cart.length === 0}
            className="w-full bg-[var(--color-burgundy)] text-[var(--color-ivory)] py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-burgundy-dark)] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </>
  )
}