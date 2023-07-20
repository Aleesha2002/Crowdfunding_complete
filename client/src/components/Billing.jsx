import React from "react";
import { apple, kids, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={kids}
          alt="billing"
          style={{
            borderRadius: "42% 58% 63% 37% / 20% 30% 70% 80% ",
            position: "absolute",
            zIndex: "10",
            height: "500px",
          }}
          className="w-[100%] h-[100%] relative z-[5] "
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient " />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient " />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white___gradient " />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bttom-0 rounded-full pink___gradient " />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          It's not about the Donation <br /> It's about the Difference.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[#ededed]`}>
          A small act of kindness, a listening ear, or a helping hand can create
          ripples of positive change that extend far beyond what we can fathom.
          The true essence of giving lies in the understanding that every
          gesture, no matter how small, has the potential to transform someone's
          life for the better.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer "
          />
          <img
            src={google}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain cursor-pointer "
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
