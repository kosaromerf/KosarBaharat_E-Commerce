import React from "react";
import styles from "../Styles/ContactTime.module.css";
import PropTypes from "prop-types";

const ContactTime = ({ label, weekdays, saturday, sunday }) => {
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Weekdays : </span>
          <span>{weekdays}</span>
        </li>
        <li className={styles.item}>
          <span>Saturday : </span>
          <span>{saturday}</span>
        </li>
        <li className={styles.item}>
          <span>Sunday : </span>
          <span>{sunday}</span>
        </li>
      </ul>
    </div>
  );
};

ContactTime.propTypes = {
  label: PropTypes.string,
  weekdays: PropTypes.string.isRequired,
  saturday: PropTypes.string.isRequired,
  sunday: PropTypes.string.isRequired,
};
export default ContactTime;
