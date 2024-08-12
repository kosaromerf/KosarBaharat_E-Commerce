import React, { useContext } from "react";
import styles from "../Styles/Header.module.css";
import NavBar from "./NavBar";
import { CartContext } from "../utils/CartContext";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Header = () => {
  const { inCart, setInCart } = useContext(CartContext);

  return (
    <header className={styles.main}>
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          width={80}
          height={45}
          className={styles.logo}
        />
      </Link>
      <NavBar inCart={inCart} setInCart={setInCart} />
    </header>
  );
};

export default Header;
