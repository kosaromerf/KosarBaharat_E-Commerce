import React from "react";
import styles from "../Styles/Products.module.css";
import Card from "./Card";

const Products = ({ products, inCart, setInCart }) => {
  return (
    <div className={styles.container}>
      {products.map((e, i) => (
        <Card
          key={i}
          name={e.name}
          price={e.price}
          available={e.available}
          tags={e.tags}
          inCart={inCart}
          setInCart={setInCart}
          image={e.image}
        />
      ))}
    </div>
  );
};

export default Products;
