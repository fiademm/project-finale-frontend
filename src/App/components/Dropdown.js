import React, { useState } from 'react';


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    // Do something with the selected item, such as navigate to a different page
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu}>
        {selectedItem || 'Menu'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleItemClick('Leaderboard')}>Leaderboard</li>
          <li onClick={() => handleItemClick('Instructors')}>Instructors</li>
          <li onClick={() => handleItemClick('Job Listing')}>Job Listing</li>
          <li onClick={() => handleItemClick('News')}>News</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;