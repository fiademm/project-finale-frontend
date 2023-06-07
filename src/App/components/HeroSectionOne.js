import React from 'react'
import './HeroSection0ne.css'
import hero from "./images/hero.jpg"

function HeroSectionOne() {
  return (
    <div className="hero-section">
    <div className="hero-content">
            <div className="hero-text">
        <h1 className="hero-title1">Creating Top Tech </h1>
        <h1 className="hero-title2">Talents For The World </h1>
        <p className="hero-subtitle1">A platform that helps you learn technology skills virtually</p>
        <p className="hero-subtitle2">with free opportunities that will hasten your career success</p>
        <div className="hero-buttons">
          <button className="hero-button hero-button-start">Get started</button>
          <button className="hero-button hero-button-browse">Browse courses</button>
          <img src={hero} alt="learn" className="hero-image" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroSectionOne;