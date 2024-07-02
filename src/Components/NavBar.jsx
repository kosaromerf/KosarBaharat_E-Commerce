import React from "react";
import styles from "../Styles/NavBar.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  return (
    <nav className={styles.main}>
      <Link to="/cart" className={styles.cart}>
        <BsCart4 />
      </Link>
      <button
        className={styles.hamburger}
        onClick={() => setDropdownMenu(!dropdownMenu)}
      >
        {!dropdownMenu ? <GiHamburgerMenu /> : " X"}
      </button>
      <div
        className={`${styles.collapseNav} ${dropdownMenu ? styles.show : ""}`}
      >
        <Link className={styles.navItem} to="/about">
          About
        </Link>
        <Link className={styles.navItem} to="/shop">
          Shop
        </Link>
        <Link className={styles.navItem} to="/contact">
          Contact
        </Link>
      </div>
      <div className={styles.navBar}>
        <Link className={styles.navItem} to="/about">
          About
        </Link>
        <Link className={styles.navItem} to="/shop">
          Shop
        </Link>
        <Link className={styles.navItem} to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
