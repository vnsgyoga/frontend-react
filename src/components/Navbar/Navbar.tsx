import Icon from "../Icon/Icon"
import { useState } from "react"
import "./Navbar.css"
import { scrollToSection } from "../../utils/scrollToSection"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleChange() {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="flex justify-between">
      <div className={menuOpen ? "nav-links" : "nav-links expanded"}>
        <div onClick={() => scrollToSection("home")} className="link">
          Home
        </div>
        <div onClick={() => scrollToSection("about")} className="link">
          About
        </div>
        <div onClick={() => scrollToSection("contact")} className="link">
          Contact
        </div>
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
