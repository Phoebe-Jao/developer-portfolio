import { Link, NavLink } from "react-router-dom"
import menu from "../data/menu"
import logo from "../assets/images/logo.png"

function Header() {
  return (
    <header className="min-h-24 flex justify-between items-center container pt-[1.9rem] pb-3.5 border-b border-dark-blue">
      <Link to="/" className="flex justify-start items-center gap-3">
        <img src={logo} alt="logo" className="max-w-12" />
        <span className="text-2xl pt-1">PHOEBE</span>
      </Link>
      <ul className="flex gap-15">
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