import React from "react";
import styles from "./style";
import { Navbar, Contact_Details, Footer, CTA2 } from "./components/index";

const About = () => {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Contact_Details />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <CTA2 />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
