import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {FaChevronDown, FaSearch} from "react-icons/fa";
import { useAuth } from '../context/Auth';
import toast from 'react-hot-toast';

const Header = () => {

  const [auth,setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  
  return (
    <header className='header'>
        <div class="left-section">
          {auth?.user ? <div class="logo">Health & Hygiene<br></br> <p> welcome {auth?.user?.name}</p></div> : <div class="logo">Health & Hygiene<br></br> <p> welcome </p></div>}
          {/* <div class="search-bar">
            <FaSearch className='search-icon' />
            <input type="text" placeholder="Search..." />
          </div> */}
        </div>
        <div class="right-section">
          <nav class="navigation">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
              {auth?.user ? <>
              <li><NavLink to="/user/resources">Resources</NavLink></li>
              <li><NavLink to="/user/about">About Us</NavLink></li>
              <li><NavLink to="/login" onClick={handleLogout}>Logout</NavLink></li>
              </>            
              : <>
              <li><NavLink to="/login">Login</NavLink></li>
              </>}
              {auth?.user?.role===1 ? <>
                {/* <li><NavLink to="/user/resources">Resources</NavLink></li> */}
              <li><NavLink to="/admin/activity">All registered</NavLink></li>
              <li><NavLink to="/admin/admin-activities">Activities</NavLink></li>
              {/* <li><NavLink to="/user/about">About Us</NavLink></li> */}
              </>
              : <>
              <li><NavLink to="/user/testimonials">Activities</NavLink></li>
              </>
              }
              
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header

