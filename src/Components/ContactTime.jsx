import React from "react";
import styles from "../Styles/ContactTime.module.css";
import PropTypes from "prop-types";

const ContactTime = ({ label, weekdays, saturday, sunday }) => {
  return (
    <ul className={styles.list}>
      <p className={styles.label}>{label}</p>
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
  );
};

ContactTime.propTypes = {
  label: PropTypes.string,
  weekdays: PropTypes.string.isRequired,
  saturday: PropTypes.string.isRequired,
  sunday: PropTypes.string.isRequired,
};
export default ContactTime;
