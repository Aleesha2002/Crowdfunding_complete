import React from "react";
import styles from "../style";
import Button from "./Button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}`}>
          Let’s Spread Smile Not Tears Come Cultivate Love Not Fears
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[#ededed]`}>
          Your tiniest support can go a long way in making some ease to them.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Link to="/signup" className="link">
          <Button />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
