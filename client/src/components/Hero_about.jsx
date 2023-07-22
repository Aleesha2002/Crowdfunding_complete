import React from "react";
import styles from "../style";

const Hero_about = () => {
  return (
    <section id="home" className="" style={{ paddingBottom: "100px" }}>
      <div className={` ${styles.flexStart} py-[50px]  xl:px-0 sm:px-16 px-6 `}>
        <div className=" items-center w-full ">
          <h1 className="text-center font-poppins font-semibold text-gradient ss:text-[72px] text-[52px] ">
            Take Small Steps to Spread
            <br />
            Big Smiles...
          </h1>

          <h3
            className={`font-poppins text-[24px] leading-[30.8px] text-center  text-white`}
          >
            Acts of kindness need not be extravagant, they can be as simple as
            offering a warm greeting, lending a listening ear, or sharing a
            genuine compliment. These tiny gestures of compassion can have a
            profound impact on someone's day and uplift their spirits in ways we
            may never fully comprehend. By taking small steps to spread big
            smiles, we create a ripple effect of positivity that can touch the
            lives of countless individuals.
          </h3>
        </div>
        <div className="absolute z-[0] w-[50%] h-[50%] item-center bottom-20 blue__gradient " />
      </div>
    </section>
  );
};

export default Hero_about;
