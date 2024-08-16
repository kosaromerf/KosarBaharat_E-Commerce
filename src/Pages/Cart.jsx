import React, { useState, useContext, useEffect } from "react";
import styles from "../Styles/Cart.module.css";
import { CartContext } from "../Context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  //Variable for holding data from inputs in form
  const [details, setDetails] = useState({
    name: "",
    contact: "",
    address: "",
    notes: "",
  });

  //Getting Items added to cart using useContext
  const { inCart, setInCart } = useContext(CartContext);

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
        <button onClick={() => deleteItem(e)} className={styles.deleteBtn}>
          <MdDeleteForever />
        </button>
      </div>
    </li>
  ));

  //Changing total number every time items in cart changes
  useEffect(() => {
    setTotal([...inCart].reduce((tot, e) => e.price * e.amount + tot, 0));
  }, [inCart]);

  //Logic to change details when an input is changed
  const formInput = (item, value) => {
    switch (item) {
      case "name":
        setDetails({ ...details, name: value });
        break;
      case "contact":
        setDetails({ ...details, contact: value });
        break;
      case "address":
        setDetails({ ...details, address: value });
        break;
      case "notes":
        setDetails({ ...details, notes: value });
        break;
      default:
        break;
    }
  };

  //After order complated cleaning the cart
  const order = () => {
    setInCart([]);
  };

  return (
    <main className={styles.main}>
      <div className={styles.order}>
        <div className={styles.cart}>
          <div className={styles.modal}>
            <h2 className={styles.header}>Items In Cart</h2>
            {inCart.length !== 0 ? (
              <ul className={styles.modalList}>{modalDisplay}</ul>
            ) : (
              <p className={styles.emptyCart}>There Are No Items In The Cart</p>
            )}
            <p className={styles.total}>
              Total : {total}
              <span>&#8378;</span>
            </p>
          </div>
        </div>
        <div className={styles.form}>
          <h2 className={styles.header}>Delivery Information</h2>
          <div className={styles.input}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Customer Name"
              onChange={() => formInput("name", event.target.value)}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              name="contact"
              placeholder="Phone or Email"
              onChange={() => formInput("contact", event.target.value)}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Delivery Address"
              onChange={() => formInput("address", event.target.value)}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="notes">Notes</label>
            <textarea
              type="textarea"
              name="notes"
              placeholder="Additional Notes"
              onChange={() => formInput("notes", event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.detail}>
        <h2>Details</h2>
        <div className={styles.infoCard}>
          <p className={styles.info}>
            Name:
            <strong>{details.name}</strong>
          </p>
          <address>{details.address}</address>
          <p className={styles.info}>
            Contact: <span>{details.contact}</span>
          </p>
          <p className={styles.info}>
            Total: <span>{total}&#8378;</span>
          </p>
        </div>
        <Link className={styles.orderBtn} to="/shop" onClick={order}>
          Order
        </Link>
      </div>
    </main>
  );
};

export default Cart;
