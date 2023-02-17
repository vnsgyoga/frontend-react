import { Link } from "react-router-dom"
import Icon from "../Icon/Icon"
import { useState } from "react"
import "./Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  function handleChange() {
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="flex justify-between">
      <div className={menuOpen ? "nav-links" : "nav-links expanded"}>
        <a href="/" className="link">
          Home
        </a>
        <a href="#about" className="link">
          About
        </a>
        <a href="#contact" className="link">
          Contact
        </a>
      </div>
      <Icon
        name={menuOpen ? "hamburger-menu" : "close-icon"}
        className={menuOpen ? "nav-button" : "nav-button close"}
        onClick={handleChange}
      />
    </div>
  )
}

export default Navbar
