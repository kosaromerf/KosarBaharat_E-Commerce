import React from "react";
import styles from "../Styles/ContactCard.module.css";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import addClipboard from "../utils/addClipboard";

const ContactAdress = ({ label, info, icon, clipBoard }) => {
  return (
    <div className={styles.part}>
      <p className={styles.label}>{label}</p>
      <p className={styles.information}>
        {icon && label == "Phone Number" ? (
          <MdOutlinePhoneAndroid className={styles.icon} />
        ) : label == "Whatsapp Number" ? (
          <FaWhatsapp className={styles.icon} />
        ) : label == "E-Mail" ? (
          <MdOutlineMailOutline className={styles.icon} />
        ) : (
          ""
        )}
        {info}
        {clipBoard && (
          <button
            className={styles.clipBoardBtn}
            onClick={() => addClipboard(info)}
          >
            <MdOutlineContentCopy className={styles.clipBoard} />
          </button>
        )}
      </p>
    </div>
  );
};

export default ContactAdress;