import React, { useState } from 'react';
import { BsBook, BsChatRightText, BsGear, BsGrid, BsPeople, BsPersonVideo3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const DashboardButtons = () => {
    const [activeButton, setActiveButton] = useState('Dashboard');
    const buttonData = [
      { id: 1, icon: BsGrid, title: 'Dashboard', link: '/a-dashboard' },
      { id: 2, icon: BsBook, title: 'Courses', link: '/a-courses' },
      { id: 3, icon: BsPersonVideo3, title: 'Instructors', link: '/a-instructors' },
      { id: 4, icon: BsChatRightText, title: 'Messages', link: '/a-messages' },
      { id: 4, icon: BsPeople, title: 'Students', link: '/a-students' },
      { id: 5, icon: BsGear, title: 'Settings', link: '/a-settings' },
    ];
  
    const handleClick = (button) => {
      setActiveButton(button);
    };
  
    return (
      <div className="sidebar-buttons-container">
        {buttonData.map((button) => (
          <Link to={button.link} key={button.id} style={{textDecoration: 'none', backgroundColor: 'transparent' }}>
            <span
              className={`sidebar-button ${activeButton === button.title ? 'active-sidebar-button' : ''}`}
              onClick={() => handleClick(button.title)}
            >
            <button.icon />
            {button.title}
            </span>
          </Link>
        ))}
      </div>
    );
};

export default DashboardButtons;
