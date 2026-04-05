import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToCollection = () => {
    const element = document.getElementById('collection')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="hero-section pt-20">
      {/* Background Elements */}
      <div className="hero-background"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23D4AF37' fill-opacity='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-cursive text-[var(--color-gold-light)] text-3xl sm:text-4xl mb-4"
            >
              Welcome to
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-[var(--color-ivory)] mb-6"
            >
              Saree<span className="text-[var(--color-gold)]">Lux</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg sm:text-xl text-[var(--color-ivory)]/80 mb-8 max-w-xl mx-auto lg:mx-0 font-light"
            >
              Discover the timeless elegance of handcrafted Indian sarees, where tradition meets contemporary grace
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <button
                onClick={scrollToCollection}
                className="group relative px-10 py-4 bg-[var(--color-gold)] text-[var(--color-burgundy-dark)] font-semibold text-lg rounded-full overflow-hidden hover:shadow-2xl hover:shadow-[var(--color-gold)]/30 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-[var(--color-gold-light)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </motion.div>
          </motion.div>

          {/* Elegant Saree Model Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-model-container hidden lg:block"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
                alt="Elegant Saree Model"
                className="hero-model rounded-2xl shadow-2xl"
              />
              {/* Floating decorative element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[var(--color-gold)]/20 blur-2xl"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[var(--color-gold)]/10 blur-3xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="scroll-indicator absolute bottom-8 left-1/2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}