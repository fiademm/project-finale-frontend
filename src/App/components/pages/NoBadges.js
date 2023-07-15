import React from 'react';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import { BadgeList } from '../CardsList';
import Badge1 from '../../images/badges/badge1.png';
import Badge2 from '../../images/badges/badge2.png';
import Badge3 from '../../images/badges/badge3.png';
import { Bs0CircleFill, BsChevronLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import BadgeImg from '../../illustrations/NoBagdes.png';

const NoBadges = () => {
  return(
      <>
          <LoggedInHeader />
          <div className='page-heading'>
              <Link to='/profiles' className='page-link'><BsChevronLeft className='page-icon' /> <span style={{fontFamily: 'Jost-Medium', backgroundColor: 'transparent', color: '#fafafa', fontSize: '0.7vw'}}>Back to profiles</span></Link>
              <h3>Badges</h3>
          </div>
          <div style={{width:'100%', padding:'1% 20%', borderRadius:'0.2vw', fontFamily: 'Jost-Medium', fontSize: '1vw'}}>
            <img style={{width: '64%'}} src={BadgeImg} alt="Page Not Found" />
            <p>Looks like you haven't earned any badges yet. Keep exploring and learning to unlock new achievements!</p>
          </div>
          <LoggedInFooter />
      </>
  );
};

export default NoBadges;