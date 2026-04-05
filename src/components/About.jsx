import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-[var(--color-ivory)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--color-gold)]/30 rounded-2xl"></div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80"
                alt="Saree craftsmanship"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[var(--color-cream)] p-6 rounded-xl shadow-2xl border border-[var(--color-gold-pale)]">
              <p className="font-heading text-4xl font-bold text-[var(--color-burgundy)]">15+</p>
              <p className="text-[var(--color-charcoal)]/60 text-sm">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-cursive text-[var(--color-gold)] text-2xl mb-2">Our Story</p>
            <h2 className="text-4xl font-heading font-bold text-[var(--color-burgundy)] mb-6">Crafted with Passion</h2>
            <p className="text-[var(--color-charcoal)]/70 text-lg mb-6 leading-relaxed">
              At SareeLux, we believe every saree tells a story of heritage, craftsmanship, and timeless beauty. Our collection brings together the finest weaves from master artisans across India.
            </p>
            <p className="text-[var(--color-charcoal)]/70 text-lg mb-8 leading-relaxed">
              Each piece is carefully selected to ensure exceptional quality, authentic craftsmanship, and elegant design that transcends generations.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-heading text-3xl font-bold text-[var(--color-gold)]">500+</p>
                <p className="text-[var(--color-charcoal)]/60 text-sm">Happy Customers</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-[var(--color-gold)]">100+</p>
                <p className="text-[var(--color-charcoal)]/60 text-sm">Unique Designs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}