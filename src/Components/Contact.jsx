import React from "react";
import styles from "../Styles/Contact.module.css";
import Header from "./Header";
import background from "../assets/background.jpg";
import { useState } from "react";

const Contact = () => {
  const [page, setPage] = useState("phone");

  const changeInfo = (event) => {
    setPage(event.target.name);
  };

  const phoneContent = (
    <div className={styles.info}>
      <div>
        Contact Name: <b>Aziz Kosar</b>
      </div>
      <br />
      <div>
        Phone Number: <b>+90 5xx 737 x9 x0</b>
        <br />
        Whatsapp Number: <b>+90 5xx 737 x9 x0</b>
      </div>
      <br />
      <ul>
        <li>Weekdays : 08:00 A.M - 05:00 PM</li>
        <li>Saturday : 09:00 A.M - 05:00 PM</li>
        <li>Sunday : Unavalible</li>
      </ul>
      <br />
      <p>
        For information please call inside the hours. For your orders written
        forms like whatsapp or email are preffered
      </p>
    </div>
  );

  const emailContent = (
    <div className={styles.info}>
      <div>
        Contact Name: <b>Aziz Kosar</b>
      </div>
      <br />
      <div>
        E-Mail: <b>kosaraziz@example.com</b>
      </div>
      <br />
      <ul>
        <li>Weekdays : 08:00 A.M - 11:00 PM</li>
        <li>Saturday : 09:00 A.M - 11:00 PM</li>
        <li>Sunday : Unavalible</li>
      </ul>
      <br />
      <p>
        For information please call inside the hours. For your orders written
        forms like whatsapp or email are preffered
      </p>
    </div>
  );

  const addressContent = (
    <div className={styles.info}>
      <div>
        Owner Name: <b>Aziz Kosar</b>
      </div>
      <br />
      <ul>
        <li>Weekdays : 08:00 A.M - 5:00 PM</li>
        <li>Saturday : 08:00 A.M - 5:00 PM</li>
        <li>Sunday : Closed</li>
      </ul>
      <br />
      <div>
        Shop Address: <i>Aragorn caddesi 51651 sokak 16/a Adana/Türkiye</i>
      </div>
    </div>
  );
  const mapContent = <div className={styles.info}></div>;

  return (
    <div>
      <header className={styles.header}>
        <Header></Header>
      </header>
      <div className={styles.page}>
        <div className={styles.container}>
          <nav>
            <button onClick={changeInfo} className={styles.btn} name="phone">
              Phone
            </button>
            <button onClick={changeInfo} className={styles.btn} name="email">
              Email
            </button>
            <button onClick={changeInfo} className={styles.btn} name="address">
              Adress
            </button>
            <button onClick={changeInfo} className={styles.btn} name="map">
              Map
            </button>
          </nav>
          <section className={styles.content}>
            {page == "phone"
              ? phoneContent
              : page == "email"
              ? emailContent
              : page == "address"
              ? addressContent
              : page == "map"
              ? mapContent
              : phoneContent}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
