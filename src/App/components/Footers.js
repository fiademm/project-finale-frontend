import React from 'react';
import '../styles/components.css';

const DefaultFooter = () => {
  return (
    <div className="footer-container">
      <span>Copyright © 2023. All Rights Reserved</span>
    </div>
  );
};

const LoggedInFooter = () => {
  return (
    <div className="footer-container">
      <span>Copyright © 2023. All Rights Reserved</span>
    </div>
  );
};

export { DefaultFooter, LoggedInFooter };