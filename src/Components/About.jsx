import React from "react";
import styles from "../Styles/About.module.css";
import background from "../assets/background.jpg";

const About = () => {
  return (
    <main>
      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.header}>About Us</h1>
          <p className={styles.text}>
            <img
              className={styles.image}
              src={background}
              alt="image of some spices"
              width={50}
              height={50}
            />
            <span>Kosar Baharat</span> is a family-owned business, established
            in <span>1997</span>. For <span>over 25 years</span>, we've been
            bringing the freshest, most flavorful spices and herbs to our
            community. The owner, Aziz Kosar, has a deep passion for
            high-quality ingredients. We believe that everyday cooking deserves
            the best, and that's why we source our spices and herbs with care.
            You won't find any fillers or artificial ingredients here just pure,
            delicious flavor.
          </p>
          <p className={styles.text}>
            Reliability is our top priority. We understand the importance of
            having a store you can trust, and we're committed to providing
            exceptional service and consistent quality, every time.
          </p>
          <p className={styles.text}>
            Explore our wide selection of all your favorite spices and herbs,
            and discover the difference fresh ingredients can make in your
            cooking. We're here to help you create delicious meals for your
            family and friends.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
