import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Styles/CartDisplay.module.css";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";

const CartDisplay = ({ inCart, setInCart }) => {
  //Varible to hold total cost of the items
  const [total, setTotal] = useState(0);

  //Deleting items from the cart
  const deleteItem = (item) => {
    const tempCart = [...inCart].filter((e) => e.name !== item.name);
    setInCart(tempCart);
  };

  //Displaying items in Cart as a list
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
        <button
          onClick={() => deleteItem(e)}
          className={styles.deleteBtn}
          aria-label="Button for removing item from cart"
        >
          <MdDeleteForever />
        </button>
      </div>
    </li>
  ));

  //Changing total number every time items in cart changes
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

CartDisplay.propTypes = {
  inCart: PropTypes.array.isRequired,
  setInCart: PropTypes.func.isRequired,
};

export default CartDisplay;
