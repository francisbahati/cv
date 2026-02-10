import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  // Toggle mobile navigation
  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  // Close mobile nav when clicking on links
  const closeMobileNav = () => {
    setMobileNavActive(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const toggleScrolled = () => {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      
      if (!selectHeader || (!selectHeader.classList.contains('scroll-up-sticky') && 
          !selectHeader.classList.contains('sticky-top') && 
          !selectHeader.classList.contains('fixed-top'))) {
        return;
      }
      
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    };

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
    };
  }, []);

  // Add/remove mobile-nav-active class to body
  useEffect(() => {
    if (mobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [mobileNavActive]);

  return (
    <header id="header" className="header d-flex align-items-center light-background sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Francis Bahati</h1> 
        </a> 

        <nav id="navmenu" className={`navmenu ${mobileNavActive ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><a href="/" className="active" onClick={closeMobileNav}>Home</a></li>
            <li><a href="/about" onClick={closeMobileNav}>About</a></li>
            <li><a href="/resume" onClick={closeMobileNav}>Resume</a></li>
            <li><a href="/services" onClick={closeMobileNav}>Services</a></li>
            <li><a href="/portfolio" onClick={closeMobileNav}>Portfolio</a></li>
            <li><a href="/contact" onClick={closeMobileNav}>Contact</a></li>
          </ul>
          <i 
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  );
}

