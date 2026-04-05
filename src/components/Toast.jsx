import { motion, AnimatePresence } from 'framer-motion'

export default function Toast({ show, message }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, scale: 0.9, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 100, scale: 0.9, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[var(--color-burgundy)] text-[var(--color-ivory)] px-6 py-3 rounded-full shadow-2xl z-50"
        >
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}