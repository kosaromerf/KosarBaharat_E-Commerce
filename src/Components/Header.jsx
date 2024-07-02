import logo from "../assets/logo.jpeg";
import styles from "../Styles/Header.module.css";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
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
      <NavBar />
    </header>
  );
};

export default Header;
