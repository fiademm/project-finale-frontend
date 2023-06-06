import React from 'react'
import './HeroPart.css'
import hero from "./images/hero.jpg"

function HeroPart() {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">Creating Top Tech </h1>
                    <h1 className="hero-title">Talents For The World </h1>
                    <p className="hero-subtitle">A platform that helps you learn technology skills virtually</p>
                    <p className="hero-subtitle">with free opportunities that will hasten your career success</p>
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

export default HeroPart;