import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = ()=>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(()=>{
      AOS.init({duration:2000,offset:300});
    },[])
    return <>
              <nav className="mobile-navbar">
              <div className="mobile-navbar-logo">
                {/* Your logo */}
              </div>
              <div className={`mobile-navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {/* Mobile menu items */}
                <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/resources">Resources</NavLink></li>
                <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/get-involved">Get-Involved</NavLink></li>
                  {/* Add more menu items */}
                </ul>
              </div>
              <div className="mobile-navbar-icon" onClick={toggleMobileMenu}>
                <div className={`mobile-hamburger ${isMobileMenuOpen ? 'open' : ''}`}></div>
              </div>
            </nav>
            </>
  }

  export default Navbar;