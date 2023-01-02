import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 relative">
      <div className="logo">Career Bliss</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
