import { Link, NavLink } from "react-router-dom"
import menu from "../data/menu"
import logo from "../assets/images/logo.png"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.75, x: 50, y: -90 },
    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
    exit: { opacity: 0, scale: 0.75, x: 50, y: -90 },
  };

  return (
    <header className="relative min-h-24 flex justify-between items-center container pt-[1.9rem] pb-3.5 border-b border-dark-blue">
      <Link to="/" className="flex justify-start items-center max-md:gap-1 gap-3">
        <img src={logo} alt="logo" className="max-w-12" />
        <span className="text-2xl pt-1">PHOEBE</span>
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className="max-md:flex flex-col justify-between hidden w-8 h-4">
        <span className={`w-full h-[1.5px] bg-white ${isOpen ? 'relative top-2 rotate-45' : 'rotate-0'} transition-all duration-450`}></span>
        <span className={`w-full h-[1.5px] bg-white ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'} transition-opacity duration-200`}></span>
        <span className={`w-full h-[1.5px] bg-white ${isOpen ? 'relative -top-1.5 -rotate-45' : '-rotate-180'} transition-all duration-400`}></span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ delay: 0, type: "spring", duration: 0.9 }}
            className="absolute top-full right-0 z-100"
          >
            <div className="max-md:block hidden bg-dark-blue h-[200%] w-40 rounded-2xl">
              <ul className="max-md:flex-col flex max-md:gap-3 gap-15 max-md:py-7 max-md:px-6">
                {
                  menu.map((item, i) => (
                    <li key={i} className="uppercase font-medium text-[1rem] transition-opacity duration-600 ease-in-out hover:opacity-50">
                      <NavLink to={item.link} className={({ isActive }) => isActive ? "text-gradient" : "text-white"}>{item.title}</NavLink>
                    </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ul className="max-md:hidden flex gap-15">
        {
          menu.map((item, i) => (
            <li key={i} className="uppercase font-medium text-[1rem] transition-opacity duration-600 ease-in-out hover:opacity-50">
              <NavLink to={item.link} className={({ isActive }) => isActive ? "text-gradient" : "text-white"}>{item.title}</NavLink>
            </li>
        ))}
      </ul>
    </header>
  )
}

export default Header;