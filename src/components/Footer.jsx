export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-6">
              <span className="text-3xl font-heading font-bold text-[var(--color-ivory)]">Saree</span>
              <span className="text-3xl font-heading font-bold text-[var(--color-gold)]">Lux</span>
            </div>
            <p className="text-[var(--color-ivory)]/70 mb-6">
              Bringing you the finest collection of Indian sarees, crafted with tradition and love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--color-ivory)] font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-[var(--color-ivory)]/70 hover:text-[var(--color-gold)] transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('collection')} className="text-[var(--color-ivory)]/70 hover:text-[var(--color-gold)] transition">
                  Collection
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-[var(--color-ivory)]/70 hover:text-[var(--color-gold)] transition">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--color-ivory)] font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-[var(--color-ivory)]/70">
              <li>Email: hello@sareelux.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--color-ivory)]/20 mt-12 pt-8 text-center text-[var(--color-ivory)]/50">
          <p>&copy; 2024 SareeLux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}