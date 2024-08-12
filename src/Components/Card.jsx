import React, { useEffect, useState } from "react";
import styles from "../Styles/Card.module.css";

const Card = ({ name, price, available, inCart, setInCart, image }) => {
  const [detail, setDetail] = useState(1);

  const amountInc = () => {
    setDetail(detail + 1);
  };

  const amountDec = () => {
    if (detail >= 1) {
      setDetail(detail - 1);
    } else if (detail == 0) {
      console.log("Amount is already 0");
    } else {
      setDetail(0);
    }
  };

  const handleChange = (event) => {
    const allowedChars = /^[0-9\b]+$/;
    if (event.target.value === "" || allowedChars.test(event.target.value)) {
      setDetail(event.target.value);
    }
  };

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
        <button className={styles.decreaseBtn} onClick={amountDec}>
          -
        </button>
        <input
          type="text"
          onChange={handleChange}
          placeholder="1"
          className={styles.inputField}
          value={detail}
          min="0"
        />
        <button className={styles.increaseBtn} onClick={amountInc}>
          +
        </button>
      </div>
      {available ? (
        <button
          className={styles.add}
          onClick={() => addToCart(name, detail, image, price)}
        >
          <div className={styles.priceResult}>
            <p className={styles.toAdd}>
              {name}({detail}kg)
            </p>
            <p className={styles.priceToAdd}>
              {detail * price}
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

export default Card;
