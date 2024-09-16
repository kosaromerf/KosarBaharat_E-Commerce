import React from "react";
import styles from "../Styles/NavBar.module.css";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import logo from "../Assets/logoRect.webp";
import { FaPhone } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import CartDisplay from "./CartDisplay";
import PropTypes from "prop-types";

const NavBar = ({ inCart, setInCart }) => {
  return (
    <nav className={styles.main}>
      <div className={styles.smallNavBar}>
        <Link to="/" aria-label="Link to navigate to Home page">
          <img src={logo} alt="logo" className={styles.smallNavItem} />
        </Link>
        <Link
          className={styles.smallNavItem}
          to="/shop"
          aria-label="Link to navigate to Shop page"
        >
          <FaShop />
        </Link>
        <Link
          to="/cart"
          className={styles.smallNavItem}
          aria-label="Link to navigate to Cart page"
        >
          <BsCart4 />
          <div className={styles.numberDisplaySmall}>{inCart.length}</div>
        </Link>
        <Link
          className={styles.smallNavItem}
          to="/about"
          aria-label="Link to navigate to About page"
        >
          <FaInfoCircle />
        </Link>

        <Link
          className={styles.smallNavItem}
          to="/contact"
          aria-label="Link to navigate to Contact page"
        >
          <FaPhone />
        </Link>
      </div>

      <div className={styles.navBar}>
        <div className={styles.cart}>
          <Link
            className={styles.toCart}
            to="/cart"
            aria-label="Shopping Cart image as a link to navigate to Cart page"
          >
            <BsCart4 />
          </Link>
          <div className={styles.numberDisplayBig}>{inCart.length}</div>
          <div className={styles.cartModal}>
            <CartDisplay inCart={inCart} setInCart={setInCart} />
          </div>
        </div>
        <Link
          className={styles.navItem}
          to="/about"
          aria-label="Link to navigate to About page"
        >
          About
        </Link>
        <Link
          className={styles.navItem}
          to="/shop"
          aria-label="Link to navigate to Shop page"
        >
          Shop
        </Link>
        <Link
          className={styles.navItem}
          to="/contact"
          aria-label="Link to navigate to Contact page"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  inCart: PropTypes.array.isRequired,
  setInCart: PropTypes.func.isRequired,
};

export default NavBar;
