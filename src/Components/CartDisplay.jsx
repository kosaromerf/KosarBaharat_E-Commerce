import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "../Styles/CartDisplay.module.css";

const CartDisplay = ({ inCart }) => {
  return (
    <div className={styles.box}>
      <BsCart4 />
      <div className={styles.displayedProducts}>
        {inCart.map((e, i) => (
          <p className={styles.product} key={i}>
            {e.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CartDisplay;
