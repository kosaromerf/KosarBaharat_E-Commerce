import React, { useState, useContext, useEffect } from "react";
import styles from "../Styles/Shop.module.css";
import productList from "../Assets/productList";
import Filter from "../Components/Filter";
import Products from "../Components/Products";
import Search from "../Components/Search";
import { CartContext } from "../Context/CartContext";

const Shop = () => {
  //Getting Items added to cart using useContext
  const { inCart, setInCart } = useContext(CartContext);

  //Getting Items from productsList
  const [products, setProducts] = useState(productList);

  //Varible for holding conditions for search clearing the other filter conditions
  const [conditions, setConditions] = useState({
    name: "",
    category: ["spice", "herb", "tea", "seed"],
    priceMax: Infinity,
    priceMin: 0,
    availability: false,
  });

  //Sorting logic
  const sortProducts = (sortMethod, filteredProducts) => {
    const tempProducts = [...filteredProducts];
    switch (sortMethod) {
      case "AZ":
        tempProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "ZA":
        tempProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "123":
        tempProducts.sort((a, b) => a.price - b.price);
        break;
      case "321":
        tempProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setProducts(tempProducts);
  };

  return (
    <main className={styles.main}>
      <Search
        productList={productList}
        setProducts={setProducts}
        conditions={conditions}
        setConditions={setConditions}
      />
      <Filter sortProducts={sortProducts} />
      <Products products={products} inCart={inCart} setInCart={setInCart} />
    </main>
  );
};

export default Shop;
