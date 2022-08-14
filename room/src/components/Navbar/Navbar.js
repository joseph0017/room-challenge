import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../images/icon-close.svg";
import { ReactComponent as MenuIcon } from "../../images/icon-hamburger.svg";
import { ReactComponent as Logo } from "../../images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
      <li className = "logo-container">
            <Logo className="logo" />
          </li>
        <ul className={click ? "nav-options active" : "nav-options"}>

          <li className="home" onClick={closeMobileMenu}>
            home
          </li>
          <li className="shop" onClick={closeMobileMenu}>
            shop
          </li>
          <li className="about" onClick={closeMobileMenu}>
            about
          </li>
          <li className="contact" onClick={closeMobileMenu}>
            contact
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="close-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;