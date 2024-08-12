import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Styles/CartDisplay.module.css";
import { MdDeleteForever } from "react-icons/md";

const CartDisplay = ({ inCart, setInCart }) => {
  const [total, setTotal] = useState(0);
  const deleteItem = (item) => {
    const tempCart = [...inCart].filter((e) => e.name !== item.name);
    setInCart(tempCart);
  };
  const modalDisplay = [...inCart].map((e, i) => (
    <li className={styles.modalItem} key={i}>
      <div>
        <img src={e.image} alt={e.name} height={50} width={50} />
        <p>
          {e.amount}x{e.name}
        </p>
      </div>
      <div>
        <p>
          {e.price * e.amount}
          <span>&#8378;</span>
        </p>
        <button onClick={() => deleteItem(e)} className={styles.deleteBtn}>
          <MdDeleteForever />
        </button>
      </div>
    </li>
  ));

  useEffect(() => {
    setTotal([...inCart].reduce((tot, e) => e.price * e.amount + tot, 0));
  }, [inCart]);

  return (
    <div className={styles.modal}>
      {inCart.length !== 0 ? (
        <ul className={styles.modalList}>{modalDisplay}</ul>
      ) : (
        <p className={styles.emptyCart}>There Are No Items In The Cart</p>
      )}

      <p className={styles.total}>
        Total : {total}
        <span>&#8378;</span>
      </p>

      <Link className={styles.paymentBtn} to="/cart">
        Payment and Delivery
      </Link>
    </div>
  );
};

export default CartDisplay;
