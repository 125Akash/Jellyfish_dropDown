// Dropdown.js

import React, { useState } from 'react';
import "./App.css"
const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="container">
      <h1 className="heading">Should you Want to use Drop-Down</h1>
      <div className="dropdown">
        <button className={`dropdown-button ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
          {selectedItem || 'Select an item'} &nbsp; <span className="arrow"></span>
        </button>
        {isOpen && (
          <ul className="dropdown-list">
            {items.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
