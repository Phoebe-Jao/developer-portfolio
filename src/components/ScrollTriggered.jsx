import { motion } from "framer-motion"

function ScrollTriggered({ children, delay = 0, duration = 1 }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.95,
          y: 15,
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, type: "spring", duration }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollTriggered;