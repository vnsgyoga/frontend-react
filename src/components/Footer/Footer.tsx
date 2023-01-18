import "./Footer.css"
import FacebookLogo from "../../assets/images/icons/Facebook.png"
import TwitterLogo from "../../assets/images/icons/Twitter.png"
import EventbriteLogo from "../../assets/images/icons/eventbrite.png"
import MeetupLogo from "../../assets/images/icons/Meetup.png"

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-title">Career Bliss</div>
          <ul>
            <li>
              <a className="footer-link-home" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="footer-link-about" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="footer-link-contact" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-logo">
          <a href="www.facebook.com" className="Facebook">
            <img className="logo" src={FacebookLogo} alt="Facebook" />
          </a>
          <a href="wwww.twitter.com" className="Twitter">
            <img className="logo" src={TwitterLogo} alt="Twitter" />
          </a>
          <a href="wwww.eventbrite.com" className="Eventbrite">
            <img className="logo" src={EventbriteLogo} alt="Eventbrite" />
          </a>
          <a href="wwww.meetup.com" className="Meetup">
            <img className="logo" src={MeetupLogo} alt="Meetup" />
          </a>
        </div>
        <div className="sign">
          <p className="career2023"> © 2023 CAREER BLISS </p>
          <p className="policy"> PRIVACY POLICY </p>
        </div>
      </footer>
  )
}

export default Footer
