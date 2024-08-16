import React, { useState } from "react";
import styles from "../Styles/Card.module.css";
import PropTypes from "prop-types";

const Card = ({ name, price, available, inCart, setInCart, image }) => {
  // Unit variable for each card
  const [unit, setUnit] = useState(1);

  // Handle amount change
  const amountChange = (event) => {
    const allowedChars = /^[1-9\b][0-9\b]*$/;
    if (event === "increase") {
      setUnit(unit + 1);
    } else if (event === "decrease") {
      if (unit >= 1) {
        setUnit(unit - 1);
      } else if (unit == 0) {
        console.log("Amount is already 0");
      } else {
        setUnit(0);
      }
    } else {
      if (event.target.value === "" || allowedChars.test(event.target.value)) {
        setUnit(event.target.value);
      }
    }
  };

  // Add to cart logic
  const addToCart = (name, amount, image, price) => {
    const itemInCart = inCart.find((e) => e.name === name);
    if (itemInCart) {
      const updatedCart = inCart.map((e) => {
        if (e.name === name) {
          return { ...e, amount: e.amount + amount };
        } else {
          return e;
        }
      });
      setInCart(updatedCart);
    } else {
      setInCart([
        ...inCart,
        { name: name, amount: amount, image: image, price: price },
      ]);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <img src={image} alt={name} className={styles.images} />
      <div className={styles.tag}>
        <h1 className={styles.title}> {name}</h1>
        <p className={styles.priceKg}>
          {" "}
          ({price} <span>&#8378;</span>/Kg)
        </p>
      </div>
      <div className={styles.amount}>
        <button
          className={styles.decreaseBtn}
          onClick={() => amountChange("decrease")}
        >
          -
        </button>
        <input
          type="text"
          onChange={() => amountChange(event)}
          placeholder="1"
          className={styles.inputField}
          value={unit}
          min="0"
        />
        <button
          className={styles.increaseBtn}
          onClick={() => amountChange("increase")}
        >
          +
        </button>
      </div>
      {available ? (
        <button
          className={styles.add}
          onClick={() => addToCart(name, unit, image, price)}
        >
          <div className={styles.priceResult}>
            <p className={styles.toAdd}>
              {name}({unit}kg)
            </p>
            <p className={styles.priceToAdd}>
              {unit * price}
              <span>&#8378;</span>
            </p>
          </div>
          <p className={styles.callToAction}>Add To Cart</p>
        </button>
      ) : (
        <button className={styles.outStock} disabled>
          Out of Stock
        </button>
      )}
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired,
  inCart: PropTypes.array.isRequired,
  setInCart: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
