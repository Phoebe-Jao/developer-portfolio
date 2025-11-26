import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Works from "./pages/Works"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="relative max-w-full overflow-x-clip overflow-y-visible">
      <div className="bg-radial-gradient -top-120 -right-56"></div>
      <div className="bg-radial-gradient top-8 -left-84"></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
