/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import Mission from './Aboutcomponents/Mission.js'
import "./About.css"
import leftdata from "./leftdata.js"
import rightdata from "./rightdata.js"

const About = () => {
  const leftColElements = leftdata.map(card => {
    return <Mission
      missionTitle={card.missionTitle}
      missionDescription={card.missionDescription}/>
  })

  const rightColElements = rightdata.map(card => {
    return <Mission
      missionTitle={card.missionTitle}
      missionDescription={card.missionDescription}/>
  })
  
  return (
    <div className="h-screen text-center about-section">
      {/* Please add HTML content as you go */}
      <h1 className="about-mission-title">Our Mission</h1>
      <p className="about-mission-description about-inner-layout">
        <div>
        Career Bliss is a place where you can take your career to a whole new level.
        </div>
        <div>
        Whether you're starting off, experienced, or just looking for a change, we're here to help you achieve success in every area of your life.
        </div>
      </p>
      <div className="about-mission-col-container about-inner-layout">
        <div className="left-col">
          <img className="about-mission-col-img" src="https://source.unsplash.com/WLxQvbMyfas"/>
          {leftColElements}
        </div>
        <div className="right-col">
          {rightColElements}
          <img className="about-mission-col-img" src="https://source.unsplash.com/WLxQvbMyfas"/>
        </div>
      </div>
    </div>
  )
}

export default About
