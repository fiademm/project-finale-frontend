import React from 'react';
import '../styles/components.css';

const FooterBeforeLogin = () => { // Rename the FooterBeforeLogin to Footer
  return (
    <div className="footer-container">
      <span>Copyright © 2023. All Rights Reserved</span>
    </div>
  );
};

const FooterAfterLogin = () => {
  return (
    <div className="footer-container">
      <span>Copyright © 2023. All Rights Reserved</span>
    </div>
  );
};

export { FooterAfterLogin, FooterBeforeLogin };