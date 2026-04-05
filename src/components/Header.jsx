import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header({ cartCount, onCartClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-ivory)]/95 backdrop-blur-md border-b border-[var(--color-gold-pale)]/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span className="text-3xl font-heading font-bold text-[var(--color-burgundy)]">Saree</span>
            <span className="text-3xl font-heading font-bold text-[var(--color-gold)]">Lux</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-[var(--color-charcoal)]/70 hover:text-[var(--color-burgundy)] font-medium transition text-sm tracking-wide">
              HOME
            </button>
            <button onClick={() => scrollToSection('collection')} className="text-[var(--color-charcoal)]/70 hover:text-[var(--color-burgundy)] font-medium transition text-sm tracking-wide">
              COLLECTION
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[var(--color-charcoal)]/70 hover:text-[var(--color-burgundy)] font-medium transition text-sm tracking-wide">
              ABOUT
            </button>
          </nav>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative p-2 text-[var(--color-burgundy)] hover:text-[var(--color-gold)] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-[var(--color-gold)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-burgundy)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[var(--color-ivory)] border-t border-[var(--color-gold-pale)]/50"
        >
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-[var(--color-charcoal)]/70 hover:text-[var(--color-burgundy)] font-medium">
              HOME
            </button>
            <button onClick={() => scrollToSection('collection')} className="block w-full text-left text-[var(--color-charcoal)]/70 hover:text-[var(--color-burgundy)] font-medium">
              COLLECTION
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[var(--color-charcoal)]/70 hover:text-[var(--color-burgundy)] font-medium">
              ABOUT
            </button>
          </div>
        </motion.div>
      )}
    </header>
  )
}