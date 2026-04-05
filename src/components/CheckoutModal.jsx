import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CheckoutModal({ isOpen, onClose, cart, cartTotal, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({ name: '', phone: '', address: '' })
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-[var(--color-ivory)] rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b border-[var(--color-gold-pale)]/50">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-heading font-bold text-[var(--color-burgundy)]">Checkout</h3>
            <button onClick={onClose} className="p-2 text-[var(--color-charcoal)]/60 hover:text-[var(--color-burgundy)] transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-[var(--color-charcoal)]/70 font-medium mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-gold-pale)] focus:border-[var(--color-burgundy)] focus:ring-1 focus:ring-[var(--color-burgundy)] outline-none transition"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-[var(--color-charcoal)]/70 font-medium mb-2">Phone Number *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-gold-pale)] focus:border-[var(--color-burgundy)] focus:ring-1 focus:ring-[var(--color-burgundy)] outline-none transition"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-[var(--color-charcoal)]/70 font-medium mb-2">Delivery Address *</label>
            <textarea
              required
              rows="3"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-gold-pale)] focus:border-[var(--color-burgundy)] focus:ring-1 focus:ring-[var(--color-burgundy)] outline-none transition"
              placeholder="Enter your delivery address"
            />
          </div>

          <div className="bg-[var(--color-cream)] rounded-lg p-4">
            <h4 className="font-heading font-semibold text-[var(--color-burgundy)] mb-3">Order Summary</h4>
            <div className="space-y-2 text-sm text-[var(--color-charcoal)]/60 max-h-32 overflow-y-auto">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x{item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[var(--color-gold-pale)]/50 mt-3 pt-3 flex justify-between">
              <span className="font-semibold text-[var(--color-burgundy)]">Total</span>
              <span className="font-heading font-bold text-[var(--color-gold)] text-lg">
                ₹{cartTotal.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--color-burgundy)] text-[var(--color-ivory)] py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-burgundy-dark)] transition hover:shadow-xl"
          >
            Send Order via WhatsApp
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}