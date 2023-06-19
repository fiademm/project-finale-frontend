import React from 'react';
import './HeroSectionThree.css';
import boy from './images/boy.jpg'
import { FaPlay, FaClock, FaCertificate, FaLifeRing } from 'react-icons/fa';


function HeroSectionThree() {
  return (
    <div>
      <h1 className="title">WHY VIRTUAL LEARNING METHOD?</h1>
      <p className="description">
        Virtual learning environments provide opportunities for<br/> everyone to participate in classes on their own schedule<br/>which enables people to learn at their own pace, providing <br/> a comfortable way for them to grow their skills.
      </p>

      <div className="icon-container">
        <div className="column">
        <div className="icon">
            <FaPlay /> {/* Play icon */}
          </div>
          <div className="icon">
            <FaClock /> {/* Clock icon */}
          </div>
        </div>
        <div className="column">
          <div className="icon">
            <FaCertificate /> {/* Certified icon */}
          </div>
          <div className="icon">
            <FaLifeRing /> {/* Lifetime access icon */}
          </div>
        </div>
        <img src={boy} alt="boy" className="boy-image" />
      </div>
    </div>
  );
}

export default HeroSectionThree;
