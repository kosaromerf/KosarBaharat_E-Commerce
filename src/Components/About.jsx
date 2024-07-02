import React from "react";
import styles from "../Styles/About.module.css";
import background from "../assets/background.jpg";
import Header from "./Header";
const About = () => {
  return (
    <div>
      <header className={styles.header}>
        <Header></Header>
      </header>
      <div className={styles.page}>
        <div className={styles.container}>
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            <img src={background} alt="background" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non amet
            nihil beatae quod ullam ad, tempore ipsum corporis aspernatur
            dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem fugiat dolores perferendis ducimus eaque. Quasi atque
            assumenda facilis consequuntur iure illum ipsum illo tempore, ipsam
            accusamus sapiente dicta magni sunt! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veritatis architecto laudantium
            quisquam officiis esse tempora debitis repudiandae eum, vitae at, ad
            reiciendis aperiam? Odio, nam beatae id, quo exercitationem, ut
            maiores iste quidem corrupti natus est asperiores labore deleniti a.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non amet
            nihil beatae quod ullam ad, tempore ipsum corporis aspernatur
            dolores? Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
