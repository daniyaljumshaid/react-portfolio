import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <style>
        {`
          .custom-nav {
            background-color: rgba(15, 32, 39, 0.95) !important;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          /* Consistent Link Color */
          .nav-link {
            color: rgba(255, 255, 255, 0.8) !important;
            transition: all 0.2s ease;
            padding: 0.5rem 1rem !important;
          }

          /* Hover & Active match the 'Info' Cyan (#0dcaf0) */
          .nav-link:hover, 
          .nav-link.active {
            color: #0dcaf0 !important; 
          }

          /* Active indicator underline */
          .nav-link.active {
            position: relative;
          }
          
          .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 70%;
            height: 2px;
            background-color: #0dcaf0;
            border-radius: 2px;
          }
        `}
      </style>

      <nav 
        className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top custom-nav"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container">
          {/* Logo/Brand */}
          <Link 
            className="navbar-brand text-info" 
            to="/"
            aria-label="Go to homepage"
          >
            <span role="img" aria-hidden="true">💼</span> MyPortfolio
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center" role="menubar">
              <li className="nav-item" role="none">
                <NavLink 
                  className="nav-link" 
                  to="/"
                  role="menuitem"
                  aria-current={location.pathname === '/' ? 'page' : undefined}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item" role="none">
                <NavLink 
                  className="nav-link" 
                  to="/about"
                  role="menuitem"
                  aria-current={location.pathname === '/about' ? 'page' : undefined}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item" role="none">
                <NavLink 
                  className="nav-link" 
                  to="/projects"
                  role="menuitem"
                  aria-current={location.pathname === '/projects' ? 'page' : undefined}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item" role="none">
                <NavLink 
                  className="nav-link" 
                  to="/resume"
                  role="menuitem"
                  aria-current={location.pathname === '/resume' ? 'page' : undefined}
                >
                  Resume
                </NavLink>
              </li>
              <li className="nav-item" role="none">
                <NavLink 
                  className="nav-link" 
                  to="/contact"
                  role="menuitem"
                  aria-current={location.pathname === '/contact' ? 'page' : undefined}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}