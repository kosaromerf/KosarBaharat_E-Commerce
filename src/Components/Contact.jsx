import React from "react";
import styles from "../Styles/Contact.module.css";
import { useState, useEffect } from "react";
import ContactAdress from "./ContactAdress";
import ContactTime from "./ContactTime";
import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";

const Contact = () => {
  const [page, setPage] = useState("phone");
  const [markerRef, marker] = useMarkerRef();

  useEffect(() => {
    if (!marker) {
      return;
    }
  }, [marker]);

  const changeInfo = (event) => {
    setPage(event.target.name);
  };

  const phoneContent = (
    <section className={styles.info}>
      <ContactAdress label={"Contact Name"} info={"Aziz Kosar"} />
      <ContactAdress
        label={"Phone Number"}
        info={"+90 5xx 737 x9 x0"}
        icon={true}
        clipBoard={true}
      />
      <ContactAdress
        label={"Whatsapp Number"}
        info={"+90 5xx 737 x9 x0"}
        icon={true}
        clipBoard={true}
      />
      <ContactTime
        weekdays={"08:00 A.M - 08:00 PM"}
        saturday={"09:00 A.M - 07:00 PM"}
        sunday={"Unavalible"}
      />
      <p>
        For information please call inside the hours. For your orders written
        forms like whatsapp or email are preffered
      </p>
    </section>
  );

  const emailContent = (
    <section className={styles.info}>
      <ContactAdress label={"Contact Name"} info={"Aziz Kosar"} />
      <ContactAdress
        label={"E-Mail"}
        info={"kosaraziz@example.com"}
        icon={true}
        clipBoard={true}
      />
      <ContactTime
        weekdays={"08:00 A.M - 11:00 PM"}
        saturday={"09:00 A.M - 11:00 PM"}
        sunday={"Unavalible"}
      />
    </section>
  );

  const addressContent = (
    <section className={styles.info}>
      <ContactAdress label={"Owner Name"} info={"Aziz Kosar"} />
      <div>
        <p>Address</p>
        <address>Dervişler Mah. Kozan Yolu 16/a Adana/Türkiye</address>
      </div>
      <ContactTime
        label={"Winter (Oct-Mar)"}
        weekdays={"08:00 A.M - 05:00 PM"}
        saturday={"08:00 A.M - 05:00 PM"}
        sunday={"Closed"}
      />
      <ContactTime
        label={"Summer (Apr-Sep)"}
        weekdays={"08:00 A.M - 07:00 PM"}
        saturday={"08:00 A.M - 07:00 PM"}
        sunday={"Closed"}
      />
    </section>
  );
  const mapContent = (
    <section className={styles.infoMap}>
      <APIProvider apiKey={"API_KEY"}>
        <Map
          className={styles.map}
          defaultCenter={{ lat: 36.99843658345435, lng: 35.360619906551435 }}
          defaultZoom={16}
          disableDefaultUI={true}
        >
          <Marker
            ref={markerRef}
            position={{ lat: 36.99835590686995, lng: 35.36069453759361 }}
          />
        </Map>
      </APIProvider>
    </section>
  );

  return (
    <main>
      <div className={styles.page}>
        <div className={styles.container}>
          <nav className={styles.navigation}>
            <button
              onClick={changeInfo}
              className={`${styles.btn} ${
                page === "phone" ? styles.active : ""
              }`}
              name="phone"
            >
              Phone
            </button>
            <button
              onClick={changeInfo}
              className={`${styles.btn} ${
                page === "email" ? styles.active : ""
              }`}
              name="email"
            >
              Email
            </button>
            <button
              onClick={changeInfo}
              className={`${styles.btn} ${
                page === "address" ? styles.active : ""
              }`}
              name="address"
            >
              Adress
            </button>
            <button
              onClick={changeInfo}
              className={`${styles.btn} ${page === "map" ? styles.active : ""}`}
              name="map"
            >
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
    </main>
  );
};

export default Contact;
