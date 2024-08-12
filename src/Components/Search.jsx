import React from "react";
import styles from "../Styles/Search.module.css";
import searchFilter from "../utils/serachFilter";

const Search = ({ productList, setProducts, conditions, setConditions }) => {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="search"
        name="search"
        placeholder="Search for items"
        onChange={() =>
          setConditions({ ...conditions, name: event.target.value })
        }
      />
      <label htmlFor="search" className={styles.label}>
        <button
          className={styles.searchBtn}
          onClick={() =>
            setProducts(() => searchFilter(productList, conditions.name))
          }
        >
          Search
        </button>
      </label>
    </div>
  );
};

export default Search;
