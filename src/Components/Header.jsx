import React, { useContext } from "react";
import styles from "../Styles/Header.module.css";
import NavBar from "./NavBar";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.jpeg";

const Header = () => {
  //Getting Items added to cart using useContext
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
