import React from 'react';
import './HeroSectionThree.css';
import boy from './images/boy.jpg'
import { FaPlay, FaClock, FaCertificate, FaLifeRing } from 'react-icons/fa';


function HeroSectionThree() {
  return (
    <div>
      <h1 className="title">WHY VIRTUAL LEARNING METHOD?</h1>
      <p className="description">
        Virtual learning environments provide opportunities for<br /> everyone to participate in classes on their own schedule<br />which enables people to learn at their own pace, providing <br /> a comfortable way for them to grow their skills.
      </p>

      <div className="icon-container">
        <div className="column">
          <div className="icon">
            <FaPlay />
          </div>
          <span className="icon-text1">Live classes</span>
          <div className="icon">
            <FaClock />
          </div>
          <span className="icon-text2">Flexible time</span>
        </div>
        <div className="column">
          <div className="icon">
            <FaCertificate />
          </div>
          <span className="icon-text3">Certified</span> {/* Text */}
          <div className="icon">
            <FaLifeRing />
          </div>
          <span className="icon-text4">Lifetime Access</span> {/* Text */}
        </div>
        <img src={boy} alt="boy" className="boy-image" />
      </div>
    </div>
  );
}

export default HeroSectionThree;
