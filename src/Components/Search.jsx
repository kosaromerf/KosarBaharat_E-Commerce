import React from "react";
import styles from "../Styles/Search.module.css";
import searchFilter from "../Utils/searchFilter";
import PropTypes from "prop-types";

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

Search.propTypes = {
  productList: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
  conditions: PropTypes.object.isRequired,
  setConditions: PropTypes.func.isRequired,
};

export default Search;
