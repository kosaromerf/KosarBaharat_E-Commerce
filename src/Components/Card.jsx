import React, { useState } from "react";
import styles from "../Styles/Card.module.css";

const Card = ({ name, price, available, addToCart }) => {
  const [detail, setDetail] = useState(1);
  const amountInc = () => {
    setDetail(detail + 1);
  };
  const amountDec = () => {
    if (detail >= 1) {
      setDetail(detail - 1);
    } else if (detail == 0) {
      alert("Amount is already 0");
    } else {
      setDetail(0);
    }
  };
  const changeDisplay = () => {
    setDetail(event.target.value);
  };

  return (
    <div className={styles.cardContainer}>
      <img src="" alt="" className={styles.images} />
      <p className={styles.title}> {name}</p>
      <p className={styles.priceKg}> {price} TL/Kg</p>
      <div className={styles.inputContaier}>
        <div className={styles.amount}>
          <input
            type="number"
            placeholder="100"
            className={styles.inputField}
            value={detail}
            onChange={changeDisplay}
            min="0"
          />
          <button className={styles.increaseBtn} onClick={amountInc}>
            +
          </button>
          <button className={styles.decreaseBtn} onClick={amountDec}>
            -
          </button>
        </div>
        <p className={styles.priceResult}>{detail * price}TL</p>
      </div>
      {available ? (
        <button className={styles.add} onClick={addToCart}>
          Add To Cart
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
