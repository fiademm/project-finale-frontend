import React from 'react';
import '../styles/components.css';
import { Link } from 'react-router-dom';
import { BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs';

const DefaultFooter = () => {
  return (
    <div className="default-footer-container">
      <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '6vw', fontSize: '0.9vw'}}>
        <section style={{textAlign: 'left', display: 'flex', flexDirection: 'column', width: '30%', gap: '0.5vw'}}>
          <h3 style={{fontFamily: "CinzelBold", fontSize: '1.7vw'}}>STEMAIDE <hr style={{width: '14%', height: '0.2vw', backgroundColor: 'black'}} /></h3>
          <p style={{fontSize: '1.1vw', fontFamily: 'Jost-Regular'}}>With the Stemaide platform, you can learn the best IT skills with free career opportunities.</p>
        </section>
        <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '60%'}}>
          <section style={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
            <span style={{fontFamily: 'Jost-Medium', fontSize: '1.1vw'}}>Quick links</span>
            <div style={{display: 'flex', flexDirection: 'column', fontSize: '0.94vw'}}>
              <Link to='a-dashboard'>Courses</Link>
              <Link to='a-dashboard'>About us</Link>
              <Link to='a-dashboard'>Contact us</Link>
              <Link to='a-dashboard'>Administrator</Link>
            </div>
          </section>
          <section style={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
            <span style={{fontFamily: 'Jost-Medium', fontSize: '1.1vw'}}>Resources</span>
            <div style={{display: 'flex', flexDirection: 'column', fontSize: '0.94vw'}}>
              <Link to='a-dashboard'>FAQs</Link>
              <Link to='a-dashboard'>Feedback</Link>
              <Link to='a-dashboard'>Help Center</Link>
            </div>
          </section>
          <section style={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
            <span style={{fontFamily: 'Jost-Medium', fontSize: '1.1vw'}}>Product</span>
            <div style={{display: 'flex', flexDirection: 'column', fontSize: '0.94vw'}}>
              <Link to='a-dashboard'>Cookies</Link>
              <Link to='a-dashboard'>Terms of use</Link>
              <Link to='a-dashboard'>Privacy policy</Link>
            </div>
          </section>
        </section>
      </section>
      <hr />
      <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9vw'}}>
        <span>Copyright © 2023. All Rights Reserved</span>
        <div>
          <BsWhatsapp />
          <BsTwitter />
          <BsInstagram />
        </div>
      </section>
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