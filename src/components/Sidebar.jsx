import React, { useState } from 'react';
import logo from '../sling-logo.png';
import { FaTh, FaBars, FaArchive, FaGlobe } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/burnhistory",
      name: " Burn History",
      icon: <FaArchive />
    },
    {
      path: "https://slingclassic.com/",
      name: "GoTo Website",
      icon: <FaGlobe />
    }
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <img style={{ display: isOpen ? "block" : "none" }} className="logo" src={logo} alt="logo" />
          <div style={{ marginLeft: isOpen ? "100px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
            onClick={closeMenu}
          >
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
        <div style={{ display: isOpen ? "block" : "none" }} className='token_price'>
          <p className='supply'>Total Supply</p>
          <p className='link_text'>1,000,000,000</p>
        </div>
        <div style={{ display: isOpen ? "block" : "none" }} className='token_price'>
          <p className='supply'>Circulating Supply</p>
          <p className='link_text'>636,000,000</p>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
