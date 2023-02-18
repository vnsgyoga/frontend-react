import "./Footer.css"
import FacebookLogo from "../../assets/images/icons/Facebook.png"
import TwitterLogo from "../../assets/images/icons/Twitter.png"
import EventbriteLogo from "../../assets/images/icons/eventbrite.png"
import MeetupLogo from "../../assets/images/icons/Meetup.png"
import { scrollToSection } from "../../utils/scrollToSection"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-title">Career Bliss</div>
        <ul>
          <li>
            <div
              className="footer-link home"
              onClick={() => scrollToSection("home")}
            >
              Home
            </div>
          </li>
          <li>
            <div
              className="footer-link about"
              onClick={() => scrollToSection("about")}
            >
              About
            </div>
          </li>
          <li>
            <div
              className="footer-link contact"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </div>
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <a
          href="https://www.facebook.com"
          className="Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="footer-logo__logo"
            src={FacebookLogo}
            alt="Facebook"
          />
        </a>
        <a
          href="https://wwww.twitter.com"
          className="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer-logo__logo" src={TwitterLogo} alt="Twitter" />
        </a>
        <a
          href="https://wwww.eventbrite.com"
          className="Eventbrite"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="footer-logo__logo"
            src={EventbriteLogo}
            alt="Eventbrite"
          />
        </a>
        <a
          href="https://wwww.meetup.com"
          className="Meetup"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer-logo__logo" src={MeetupLogo} alt="Meetup" />
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
