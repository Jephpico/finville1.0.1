import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header>
      <nav className={classes.navbar}>
        <h3 className={classes.logo}>finville</h3>
        <ul
          className={
            isMobile ? classes["nav-links-mobile"] : classes["nav-links"]
          }
          onClick={() => setIsMobile(false)}
        >
          <Link to="/" className={classes["nav-link"]}>
            <li>Home</li>
          </Link>
          <Link to="/Beginners-Guide" className={classes["nav-link"]}>
            <li>Beginners Guide</li>
          </Link>
          <Link to="/Services" className={classes["nav-link"]}>
            <li>Services</li>
          </Link>
          <Link to="/Blog" className={classes["nav-link"]}>
            <li>Blog</li>
          </Link>
          <Link
            to="/Login"
            className={`${classes["nav-link"]} ${classes["sign-in"]}`}
          >
            <li>Login</li>
          </Link>
          <Link
            to="/SignUp"
            className={`${classes["nav-link"]} ${classes["sign-up"]}`}
          >
            <li>Sign In</li>
          </Link>
        </ul>
        <button
          className={classes["mobile-menu-icon"]}
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fa fa-times"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
