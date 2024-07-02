import React from "react";
import styles from "../Styles/Products.module.css";
import background from "../assets/background.jpg";
import Header from "./Header";
import Card from "./Card";
import CartDisplay from "./CartDisplay";
import productList from "../assets/productList";
import { useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState(productList);
  const [conditions, setConditions] = useState({
    name: "",
    category: ["spice", "herb", "tea", "seed"],
    priceMax: Infinity,
    priceMin: 0,
    availability: false,
  });
  const [inCart, setInCart] = useState([{ name: "" }]);

  const categoryConditions = (con) => {
    if (conditions.category.includes(con)) {
      setConditions({
        ...conditions,
        category: conditions.category.filter((e) => e !== con),
      });
    } else {
      setConditions({
        ...conditions,
        category: [...conditions.category, con],
      });
    }
  };

  const availabilityConditionToTrue = () => {
    setConditions({
      ...conditions,
      availability: true,
    });
  };

  const availabilityConditionToFalse = () => {
    setConditions({
      ...conditions,
      availability: false,
    });
  };

  const priceCondition = (min = 0, max = Infinity) => {
    setConditions({
      ...conditions,
      priceMin: min,
      priceMax: max,
    });
  };

  const nameCondition = (value) => {
    setConditions({
      ...conditions,
      name: value,
    });
  };

  const mainFilter = () => {
    let filteredProducts = [...productList]
      .filter((e) => conditions.category.includes(e.tags))
      .filter((e) => conditions.availability === e.available || e.available)
      .filter(
        (e) => e.price <= conditions.priceMax && e.price >= conditions.priceMin
      );
    setProducts(filteredProducts);
  };

  const searchFilter = () => {
    let filteredProducts = [...productList].filter((e) =>
      e.name.toLowerCase().match(conditions.name.toLowerCase())
    );

    setProducts(filteredProducts);
  };

  const addToCart = (e) => {
    setInCart([...inCart, e]);
  };

  return (
    <div>
      <header className={styles.header}>
        <Header></Header>
      </header>

      <CartDisplay inCart={inCart} />

      <nav className={styles.filterBar}>
        <section className={styles.section}>
          <label htmlFor="search"></label>
          <input
            type="search"
            name="search"
            placeholder="Search for items"
            onChange={() => nameCondition(event.target.value)}
          />
          <button className={styles.search} onClick={searchFilter}>
            Search
          </button>
        </section>
        <hr />
        <section className={styles.section}>
          <h3>Category</h3>
          <label htmlFor="spice">
            <input
              type="checkbox"
              id="spice"
              name="spice"
              onClick={() => {
                categoryConditions("spice");
              }}
              defaultChecked
            />
            Spice
          </label>
          <label htmlFor="herbs">
            <input
              type="checkbox"
              id="herbs"
              name="herbs"
              onClick={() => {
                categoryConditions("herb");
              }}
              defaultChecked
            />
            Herbs
          </label>
          <label htmlFor="tea">
            <input
              type="checkbox"
              id="tea"
              name="tea"
              onClick={() => {
                categoryConditions("tea");
              }}
              defaultChecked
            />
            Tea
          </label>
          <label htmlFor="seed">
            <input
              type="checkbox"
              id="seed"
              name="seed"
              onClick={() => {
                categoryConditions("seed");
              }}
              defaultChecked
            />
            Seeds
          </label>
        </section>
        <hr />
        <section className={styles.section}>
          <h3>Price</h3>
          Range (/Kg)
          <div className={styles.minmax}>
            <input
              type="input"
              name="min"
              placeholder="min"
              onChange={() => {
                priceCondition(event.target.value, Infinity);
              }}
            />
            -
            <input
              type="input"
              name="max"
              placeholder="max"
              onChange={() => {
                priceCondition(0, event.target.value);
              }}
            />
          </div>
        </section>
        <hr />
        <section className={styles.section}>
          <h3>Availability</h3>
          <label htmlFor="available">
            <input
              type="radio"
              name="availability"
              id="available"
              onClick={availabilityConditionToFalse}
              defaultChecked
            />
            Show All
          </label>
          <label htmlFor="outOfStock">
            <input
              type="radio"
              name="availability"
              id="outOfStock"
              onClick={availabilityConditionToTrue}
            />
            Only Stocked
          </label>
        </section>
        <button className={styles.filter} onClick={mainFilter}>
          Filter
        </button>
      </nav>
      <div className={styles.page}>
        <div className={styles.market}>
          {products.map((e, i) => (
            <Card
              key={i}
              name={e.name}
              price={e.price}
              available={e.available}
              tags={e.tags}
              addToCart={() => addToCart(e)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
