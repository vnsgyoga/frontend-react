import { Link } from "react-router-dom"
import Icon from "../Icon/Icon"
import { useState } from "react"
import "./Navbar.css"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    function handleChange() {
      setMenuOpen(!menuOpen);
    }
    return (
      <div className="flex justify-between">
        <div className={menuOpen ? "nav-links" : "nav-links expanded"}>
        <Link to="/" className="link">Home</Link>
        <Link to="#about" className="link">About</Link>
        <Link to="#contact" className="link">Contact</Link>
        </div>
        <button className={menuOpen ? "nav-button" : "nav-button close" } onClick={handleChange}>
          <Icon name="hamburger-menu"/>
        </button>
      </div>
    )
  
}

export default Navbar
