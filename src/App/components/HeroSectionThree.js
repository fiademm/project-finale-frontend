import React from 'react';
import './HeroSectionThree.css';

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
            {/* Add your first icon here */}
          </div>
          <div className="icon">
            {/* Add your second icon here */}
          </div>
        </div>
        <div className="column">
          <div className="icon">
            {/* Add your third icon here */}
          </div>
          <div className="icon">
            {/* Add your fourth icon here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionThree;
