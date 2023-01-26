import { Link } from "react-router-dom"
import { Component } from "react"
import "./Navbar.css"

class Navbar extends Component {
  state={ clicked : false };
  handleOnclick = () => {
    this.setState({clicked:!this.state.clicked})
  }

  render() {
  return (
    <div className="flex justify-between">
      <div id="nav-menu" className={this.state.clicked ? "#nav-menu active" : "#nav-menu"}>
      <Link to="/" className="link">Home</Link>
      <Link to="#about" className="link">About</Link>
      <Link to="#contact" className="link">Contact</Link>
      </div>
      <div id="hamburger" onClick={this.handleOnclick}>
        <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  )
  }
}

export default Navbar
