import React from "react";
// import Navbar from "./Navbar";
// import Hero_about from "./Hero_about";
// import Promise from "./Promise";
import styles from "./style";
import {
  Navbar,
  Hero_about,
  OurPromise,
  Footer,
  CTA1,
} from "./components/index";

const About = () => {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero_about />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <OurPromise />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <CTA1 />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
