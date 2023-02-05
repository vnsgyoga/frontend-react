import "./Hero.css"


const Hero = () => {
  return (
    <div className="hero-section w-full h-screen flex justify-center flex-col background">
      <div className="hero-section-content">
        <h1 className="brand-name pb-[15px] shadow-effect">Career Bliss</h1>
        <p className="hero-section-paragraph pb-[15px] shadow-effect">Empower your career & academic with focus, balance and joy</p>
        <button className="hero-btn">Contact Us</button>
      </div>
    </div>
  )
}

export default Hero
