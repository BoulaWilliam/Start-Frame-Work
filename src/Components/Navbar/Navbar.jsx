import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import Home from './../Home/Home';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <>
    <div className={styles.navbar}>
    <nav className="container-lg p-3" >
      <div className={styles.container}>
      <Link to="" className="text-decoration-none">
        <h1 className="my-0 ms-5 fw-bold">Start Framework</h1>
      </Link>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
          <li>
            <NavLink to="about" className={styles.link}  onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="portfolio" className={styles.link} onClick={closeMenu}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className={styles.link} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar;
