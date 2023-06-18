import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaSearch} from "react-icons/fa"

const Header = () => {
  return (
    <header className='header'>
        <div class="left-section">
          <div class="logo">Health & Hygiene</div>
          <div class="search-bar">
            <FaSearch className='search-icon' />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div class="right-section">
          <nav class="navigation">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/resources">Resources</NavLink></li>
              <li><NavLink to="/testimonials">Testimonials</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/get-involved">Get-Involved</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header