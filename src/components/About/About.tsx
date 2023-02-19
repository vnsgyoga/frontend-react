import Mission from "./Mission"
import "./About.css"
import AboutUs1 from "../../assets/images/about-us-1.jpg"
import AboutUs2 from "../../assets/images/about-us-2.jpg"
import { Fragment } from "react"

const About = () => {
  const aboutUsData = [
    {
      isLeftData: true,
      missionTitle: "Balance",
      missionDescription:
        "We offer an array of different lessons for different lifestyles - be it a student, a stay-at-home parent, or a business owner - so that you can find what's best for you and your path.",
    },
    {
      isLeftData: false,
      missionTitle: "Empowerment",
      missionDescription:
        "Together with our courses, we also offer one-on-one coaching with experts in their field who will help you identify your goals and put together a plan to achieve them.",
    },
    {
      isLeftData: false,
      missionTitle: "Focus",
      missionDescription:
        "Practicing the inner arts helps you maintain focus and balance in your life. It's like having a personal coach that is always there for you, supporting and guiding you on the path of self-discovery.",
    },
  ]

  const leftColElements = aboutUsData.map((item, idx) => {
    return (
      <Fragment key={idx}>
        {item.isLeftData === true && (
          <Mission
            key={idx}
            missionTitle={item.missionTitle}
            missionDescription={item.missionDescription}
          />
        )}
      </Fragment>
    )
  })

  const rightColElements = aboutUsData.map((item, idx) => {
    return (
      <Fragment key={idx}>
        {item.isLeftData === false && (
          <Mission
            missionTitle={item.missionTitle}
            missionDescription={item.missionDescription}
          />
        )}
      </Fragment>
    )
  })

  return (
    <div className="h-screen text-center about-section">
      <h1 className="about-mission-title">Our Mission</h1>
      <div className="about-mission-description about-inner-layout">
        <p>
          Career Bliss is a place where you can take your career to a whole new
          level.
        </p>
        <p>
          Whether you're starting off, experienced, or just looking for a
          change, we're here to help you achieve success in every area of your
          life.
        </p>
      </div>
      <div className="about-mission-col-container about-inner-layout">
        <div className="left-col">
          <img
            className="about-mission-col-img"
            src={AboutUs1}
            alt="A group of people teaming up"
          />
          {leftColElements}
        </div>
        <div className="right-col">
          {rightColElements}
          <img
            className="about-mission-col-img"
            src={AboutUs2}
            alt="Face of a woman smiling among a group setting"
          />
        </div>
      </div>
    </div>
  )
}

export default About
