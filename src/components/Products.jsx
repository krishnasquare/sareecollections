import { motion } from 'framer-motion'
import { categories } from '../data/products'

export default function Products({ products, currentFilter, onFilterChange, onProductClick, onAddToCart }) {
  return (
    <section id="collection" className="py-24 px-4 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-cursive text-[var(--color-gold)] text-2xl mb-2">Our Collection</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-[var(--color-burgundy)]">Curated Elegance</h2>
          <div className="w-24 h-1 bg-[var(--color-gold)] mx-auto mt-4"></div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onFilterChange(category)}
              className={`filter-pill px-6 py-2 rounded-full border-2 border-[var(--color-burgundy)] font-medium transition ${currentFilter === category ? 'active' : 'text-[var(--color-burgundy)] hover:bg-[var(--color-burgundy)] hover:text-[var(--color-gold-pale)]'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="product-card"
            >
              <div
                className="card-inner bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer"
                onClick={() => onProductClick(product)}
              >
                <div className="image-container relative h-72 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[var(--color-burgundy)] text-[var(--color-gold-pale)] text-xs px-3 py-1 rounded-full font-medium">
                    {product.category}
                  </span>
                  {!product.available && (
                    <span className="absolute top-4 right-4 bg-gray-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Sold Out
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-medium">View Details</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-[var(--color-burgundy)] text-lg mb-2 truncate">
                    {product.name}
                  </h3>
                  <p className="text-[var(--color-charcoal)]/60 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-heading font-bold text-[var(--color-gold)]">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onAddToCart(product)
                      }}
                      disabled={!product.available}
                      className={`add-to-cart-btn bg-[var(--color-burgundy)] text-[var(--color-ivory)] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--color-burgundy-dark)] transition hover:shadow-lg ${!product.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {product.available ? 'Add to Cart' : 'Sold Out'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[var(--color-charcoal)]/60 text-lg">No products found in this category</p>
          </div>
        )}
      </div>
    </section>
  )
}