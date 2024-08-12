import React from "react";
import LazyLoad from "react-lazyload";
import styles from "../Styles/Home.module.css";
import { Link } from "react-router-dom";
import smallBg from "../assets/smallBG.jpg";
import rectBg from "../assets/rectBG.jpg";
import heroBg from "../assets/heroBG.jpg";

const Home = () => {
  return (
    <main>
      <LazyLoad
        height={100}
        offset={10}
        placeholder={<div className={styles.placeholder}></div>}
      >
        <picture>
          <source media="(max-width:767px)" srcSet={smallBg} />
          <source media="(max-width:991px)" srcSet={rectBg} />
          <img src={heroBg} alt="Images of spices" className={styles.bgImage} />
        </picture>
      </LazyLoad>
      <section className={styles.page}>
        <h1 className={styles.headline}>SPICE UP YOUR LIFE!</h1>
        <p className={styles.subline}>
          Discover the joy of cooking with fresh, aromatic spices and herbs.
          Browse our curated collection and rediscover the magic in your
          kitchen.
        </p>
        <Link className={styles.cta} to="/shop">
          Take a Look
        </Link>
      </section>
    </main>
  );
};

export default Home;
