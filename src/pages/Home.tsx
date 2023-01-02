import About from "../components/About/About"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default Home
