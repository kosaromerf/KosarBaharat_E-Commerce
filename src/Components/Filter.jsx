import React, { useEffect } from "react";
import styles from "../Styles/Filter.module.css";
import productList from "../Assets/productList";
import { useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import PropTypes from "prop-types";

const Filter = ({ sortProducts }) => {
  //Varible to hold conditions of filtering
  const [conditions, setConditions] = useState({
    name: "",
    category: ["spice", "herb", "tea", "seed"],
    priceRange: [true, true, true, true, true],
    availability: false,
  });

  //Varible to determine sorting menu open or close
  const [sortMenu, setSortMenu] = useState(false);

  //Varible to hold which collapsable filtering sublabels are open
  const [subLabel, setSubLabel] = useState([false, false, false]);

  //Varible to determine filtering menu open or close
  const [filterMenu, setFilterMenu] = useState(false);

  //Varible to determine the sorting icon suitable
  const [icon, setIcon] = useState(<FaSortAlphaDown />);

  //Varible to hold sorting choice
  const [sortMethod, setSortMethod] = useState("AZ");

  //Sorting and filtering regarding to choices made and closing the dropdown menus
  const sortAndFilter = (sortMethod) => {
    setSortMethod(sortMethod);
    let filteredProducts = filterAndClose();
    sortAndClose(sortMethod, filteredProducts);
  };

  //Filtering regarding to choices made and closing the dropdown menu
  const filterAndClose = () => {
    setFilterMenu(false);
    return mainFilter();
  };

  //Sorting regarding to choices made and closing the dropdown menu
  const sortAndClose = (sortMethod, filteredProducts) => {
    sortProducts(sortMethod, filteredProducts);
    changeIcon(sortMethod);
    setSortMenu(false);
  };

  //Filtering logic
  const mainFilter = () => {
    let filteredProducts = [...productList]
      .filter((e) => conditions.availability === e.available || e.available)
      .filter((e) => conditions.category.includes(e.tags))
      .filter(
        (e) =>
          (e.price <= 250 && conditions.priceRange[0]) ||
          (e.price >= 250 && e.price <= 500 && conditions.priceRange[1]) ||
          (e.price >= 500 && e.price <= 750 && conditions.priceRange[2]) ||
          (e.price >= 750 && e.price <= 1000 && conditions.priceRange[3]) ||
          (e.price >= 1000 && conditions.priceRange[4])
      );
    return filteredProducts;
  };

  //Changing the sortng icon
  const changeIcon = (sortMethod) => {
    sortMethod == "AZ"
      ? setIcon(<FaSortAlphaDown />)
      : sortMethod == "ZA"
      ? setIcon(<FaSortAlphaDownAlt />)
      : sortMethod == "123"
      ? setIcon(<FaSortAmountUp />)
      : setIcon(<FaSortAmountDown />);
  };

  //Closing and oppening the sorting dropdown
  useEffect(() => {
    if (!sortMenu) {
      document.getElementById("dropdownSort").style.display = "none";
    } else {
      document.getElementById("dropdownSort").style.display = "flex";
    }
  }, [sortMenu]);

  //Closing and opening the filtering dropdown
  useEffect(() => {
    if (!filterMenu) {
      document.getElementById("dropdownFilter").style.display = "none";
    } else {
      document.getElementById("dropdownFilter").style.display = "flex";
    }
  }, [filterMenu]);

  //Closing and opening the sublablel collapsable filters
  useEffect(() => {
    if (subLabel[0]) {
      document.getElementById("stockFilter").style.display = "none";
    } else {
      document.getElementById("stockFilter").style.display = "flex";
    }

    if (subLabel[1]) {
      document.getElementById("categoryFilter").style.display = "none";
    } else {
      document.getElementById("categoryFilter").style.display = "flex";
    }

    if (subLabel[2]) {
      document.getElementById("priceFilter").style.display = "none";
    } else {
      document.getElementById("priceFilter").style.display = "flex";
    }
  }, [subLabel]);

  //Changing availability condition
  const availabilityConditionToTrue = () => {
    setConditions({
      ...conditions,
      availability: true,
    });
  };

  //Changing availability condition
  const availabilityConditionToFalse = () => {
    setConditions({
      ...conditions,
      availability: false,
    });
  };

  //Changing category condition
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

  //Changing price condition
  const priceCondition = (input) => {
    let tempRange = conditions.priceRange;
    tempRange[input] = !tempRange[input];
    setConditions({
      ...conditions,
      priceRange: [...tempRange],
    });
  };

  return (
    <nav className={styles.filterSortBar}>
      <div className={styles.small}>
        <div className={styles.smallSort}>
          <button
            className={styles.smallSortBtn}
            onClick={() => setSortMenu(!sortMenu)}
          >
            Sort {icon}
          </button>
          <ul className={styles.sortDropdown} id="dropdownSort">
            <li onClick={() => sortAndFilter("AZ")}>
              Alphebetical (A-Z) <FaSortAlphaDown />
            </li>
            <li onClick={() => sortAndFilter("ZA")}>
              Alphebetical (Z-A) <FaSortAlphaDownAlt />
            </li>
            <li onClick={() => sortAndFilter("123")}>
              Lowest Price First <FaSortAmountUp />
            </li>
            <li onClick={() => sortAndFilter("321")}>
              Highest Price First <FaSortAmountDown />
            </li>
          </ul>
        </div>

        <div className={styles.smallFilter}>
          <button
            className={styles.smallFilterBtn}
            onClick={() => setFilterMenu(!filterMenu)}
          >
            Filter
            <FaFilter />
          </button>
          <ul className={styles.filterDropdown} id="dropdownFilter">
            <li onClick={() => setFilterMenu}>
              On Stock
              <div className={styles.stockFilter}>
                <label htmlFor="all">
                  <input
                    type="radio"
                    name="stock"
                    id="all"
                    defaultChecked
                    onChange={availabilityConditionToFalse}
                  />
                  All
                </label>

                <label htmlFor="all">
                  <input
                    type="radio"
                    name="stock"
                    id="onlyStocked"
                    onChange={availabilityConditionToTrue}
                  />
                  Stocked
                </label>
              </div>
            </li>
            <li onClick={() => setFilterMenu}>
              Categories
              <div className={styles.categoryFilter}>
                <label htmlFor="spice">
                  <input
                    type="checkbox"
                    name="spice"
                    id="spice"
                    defaultChecked
                    onClick={() => {
                      categoryConditions("spice");
                    }}
                  />
                  Spices
                </label>

                <label htmlFor="herb">
                  <input
                    type="checkbox"
                    name="herb"
                    id="herb"
                    defaultChecked
                    onClick={() => {
                      categoryConditions("herb");
                    }}
                  />
                  Herbs
                </label>

                <label htmlFor="tea">
                  <input
                    type="checkbox"
                    name="tea"
                    id="tea"
                    defaultChecked
                    onClick={() => {
                      categoryConditions("tea");
                    }}
                  />
                  Teas
                </label>

                <label htmlFor="seed">
                  <input
                    type="checkbox"
                    name="seed"
                    id="seed"
                    defaultChecked
                    onClick={() => {
                      categoryConditions("seed");
                    }}
                  />
                  Seeds
                </label>
              </div>
            </li>
            <li onClick={() => setFilterMenu}>
              Price
              <div className={styles.priceFilter}>
                <label htmlFor="low">
                  <input
                    type="checkbox"
                    name="low"
                    id="low"
                    defaultChecked
                    onChange={() => {
                      priceCondition(0);
                    }}
                  />
                  0-250TL
                </label>

                <label htmlFor="mid">
                  <input
                    type="checkbox"
                    name="mid"
                    id="mid"
                    defaultChecked
                    onChange={() => {
                      priceCondition(1);
                    }}
                  />
                  250-500TL
                </label>

                <label htmlFor="high">
                  <input
                    type="checkbox"
                    name="high"
                    id="high"
                    defaultChecked
                    onChange={() => {
                      priceCondition(2);
                    }}
                  />
                  500-750TL
                </label>

                <label htmlFor="vhigh">
                  <input
                    type="checkbox"
                    name="vhigh"
                    id="vhigh"
                    defaultChecked
                    onChange={() => {
                      priceCondition(3);
                    }}
                  />
                  750-1000TL
                </label>

                <label htmlFor="end">
                  <input
                    type="checkbox"
                    name="end"
                    id="end"
                    defaultChecked
                    onChange={() => {
                      priceCondition(4);
                    }}
                  />
                  +1000TL
                </label>
              </div>
            </li>
            <button
              className={styles.filterActionBtn}
              onClick={() => sortAndFilter(sortMethod)}
            >
              Filter
            </button>
          </ul>
        </div>
      </div>
      <div className={styles.big}>
        <ul className={styles.bigSort}>
          <li onClick={() => sortAndFilter("AZ")}>
            (A-Z) <FaSortAlphaDown />
          </li>
          <li onClick={() => sortAndFilter("ZA")}>
            (Z-A) <FaSortAlphaDownAlt />
          </li>
          <li onClick={() => sortAndFilter("123")}>
            Lowest First <FaSortAmountUp />
          </li>
          <li onClick={() => sortAndFilter("321")}>
            Highest First <FaSortAmountDown />
          </li>
        </ul>

        <div className={styles.bigFilter}>
          <ul className={styles.container}>
            <li onClick={() => setFilterMenu}>
              <div
                className={styles.subLabel}
                onClick={() =>
                  setSubLabel([!subLabel[0], subLabel[1], subLabel[2]])
                }
              >
                On Stock
                {subLabel[0] ? (
                  <div className={styles.collapseSing}>[+]</div>
                ) : (
                  <div className={styles.collapseSing}>[-]</div>
                )}
              </div>
              <div className={styles.stockFilter} id="stockFilter">
                <label htmlFor="all">
                  <input
                    type="radio"
                    name="stock"
                    id="all"
                    defaultChecked
                    onChange={availabilityConditionToFalse}
                  />
                  All
                </label>

                <label htmlFor="all">
                  <input
                    type="radio"
                    name="stock"
                    id="onlyStocked"
                    onChange={availabilityConditionToTrue}
                  />
                  Stocked
                </label>
              </div>
            </li>
            <li onClick={() => setFilterMenu}>
              <div
                className={styles.subLabel}
                onClick={() =>
                  setSubLabel([subLabel[0], !subLabel[1], subLabel[2]])
                }
              >
                Categories
                {subLabel[1] ? (
                  <div className={styles.collapseSing}>[+]</div>
                ) : (
                  <div className={styles.collapseSing}>[-]</div>
                )}
              </div>

              <div className={styles.categoryFilter} id="categoryFilter">
                <label htmlFor="spice">
                  <input
                    type="checkbox"
                    name="spice"
                    id="spice"
                    defaultChecked
                    onClick={() => {
                      categoryConditions("spice");
                    }}
                  />
                  Spices
                </label>

                <label htmlFor="herb">
                  <input
                    type="checkbox"
                    name="herb"
                    id="herb"
                    defaultChecked
                    onClick={() => {
                      categoryConditions("herb");
                    }}
                  />
                  Herbs
                </label>

                <label htmlFor="tea">
                  <input
                    type="checkbox"
                    name="tea"
                    id="tea"
                    defaultChecked
                    onClick={() => {
                      categoryConditions("tea");
                    }}
                  />
                  Teas
                </label>

                <label htmlFor="seed">
                  <input
                    type="checkbox"
                    name="seed"
                    id="seed"
                    defaultChecked
                    onClick={() => {
                      categoryConditions("seed");
                    }}
                  />
                  Seeds
                </label>
              </div>
            </li>
            <li onClick={() => setFilterMenu}>
              <div
                className={styles.subLabel}
                onClick={() =>
                  setSubLabel([subLabel[0], subLabel[1], !subLabel[2]])
                }
              >
                Price
                {subLabel[2] ? (
                  <div className={styles.collapseSing}>[+]</div>
                ) : (
                  <div className={styles.collapseSing}>[-]</div>
                )}
              </div>
              <div className={styles.priceFilter} id="priceFilter">
                <label htmlFor="low">
                  <input
                    type="checkbox"
                    name="low"
                    id="low"
                    defaultChecked
                    onChange={() => {
                      priceCondition(0);
                    }}
                  />
                  0-250TL
                </label>

                <label htmlFor="mid">
                  <input
                    type="checkbox"
                    name="mid"
                    id="mid"
                    defaultChecked
                    onChange={() => {
                      priceCondition(1);
                    }}
                  />
                  250-500TL
                </label>

                <label htmlFor="high">
                  <input
                    type="checkbox"
                    name="high"
                    id="high"
                    defaultChecked
                    onChange={() => {
                      priceCondition(2);
                    }}
                  />
                  500-750TL
                </label>

                <label htmlFor="vhigh">
                  <input
                    type="checkbox"
                    name="vhigh"
                    id="vhigh"
                    defaultChecked
                    onChange={() => {
                      priceCondition(3);
                    }}
                  />
                  750-1000TL
                </label>

                <label htmlFor="end">
                  <input
                    type="checkbox"
                    name="end"
                    id="end"
                    defaultChecked
                    onChange={() => {
                      priceCondition(4);
                    }}
                  />
                  +1000TL
                </label>
              </div>
            </li>
          </ul>
          <button
            className={styles.filterActionBtn}
            onClick={() => sortAndFilter(sortMethod)}
          >
            Filter
          </button>
        </div>
      </div>
    </nav>
  );
};

Filter.propTypes = {
  sortProducts: PropTypes.func.isRequired,
};

export default Filter;
