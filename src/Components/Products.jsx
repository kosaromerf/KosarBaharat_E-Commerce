import React from "react";
import styles from "../Styles/Products.module.css";
import Card from "./Card";
import PropTypes from "prop-types";

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

Products.propTypes = {
  products: PropTypes.array.isRequired,
  inCart: PropTypes.array.isRequired,
  setInCart: PropTypes.func.isRequired,
};

export default Products;
