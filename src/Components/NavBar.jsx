import React from "react";
import styles from "../Styles/NavBar.module.css";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import logo from "../Assets/logo.jpeg";
import { FaPhone } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import CartDisplay from "./CartDisplay";
import PropTypes from "prop-types";

const NavBar = ({ inCart, setInCart }) => {
  return (
    <nav className={styles.main}>
      <div className={styles.smallNavBar}>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={80}
            height={45}
            className={styles.smallNavItem}
          />
        </Link>
        <Link className={styles.smallNavItem} to="/shop">
          <FaShop />
        </Link>
        <Link to="/cart" className={styles.smallNavItem}>
          <BsCart4 />
          <div className={styles.numberDisplaySmall}>{inCart.length}</div>
        </Link>
        <Link className={styles.smallNavItem} to="/about">
          <FaInfoCircle />
        </Link>

        <Link className={styles.smallNavItem} to="/contact">
          <FaPhone />
        </Link>
      </div>

      <div className={styles.navBar}>
        <div className={styles.cart}>
          <Link className={styles.toCart} to="/cart">
            <BsCart4 />
          </Link>
          <div className={styles.numberDisplayBig}>{inCart.length}</div>
          <div className={styles.cartModal}>
            <CartDisplay inCart={inCart} setInCart={setInCart} />
          </div>
        </div>
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

NavBar.propTypes = {
  inCart: PropTypes.array.isRequired,
  setInCart: PropTypes.func.isRequired,
};

export default NavBar;
