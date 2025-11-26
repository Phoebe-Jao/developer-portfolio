import { Route, Routes, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Works from "./pages/Works"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import { AnimatePresence, motion } from "framer-motion"

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/Works" element={<PageWrapper><Works /></PageWrapper>} />
        <Route path="/Contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      { children }
    </motion.div>
  )
}

function App() {
  return (
    <main className="relative max-w-full overflow-x-clip overflow-y-visible">
      <div className="bg-radial-gradient -top-120 -right-56"></div>
      <div className="bg-radial-gradient top-8 -left-84"></div>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </main>
  )
}

export default App
