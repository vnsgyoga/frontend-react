import Icon from "../Icon/Icon"
import Navbar from "../Navbar"
import "./Header.css"

const Header = () => {
  return (
    <div className="header bg-main-dark-bg fixed top-0 left-0 right-0 w-full">
      <Icon name="cb-logo" className="logo" />
      <Navbar />
    </div>
  )
}

export default Header
