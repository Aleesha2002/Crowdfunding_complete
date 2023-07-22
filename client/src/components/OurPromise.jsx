import React from "react";
import styles from "../style";
import { fundraising, img_1, volunteering } from "../assets";

const OurPromise = () => {
  return (
    <section id="home" className="mt-[30px]" style={{ paddingBottom: "100px" }}>
      <div className={` ${styles.flexStart} py-[50px]  xl:px-0 sm:px-16 px-6`}>
        <div className=" items-center w-full">
          <h1 className="text-center font-poppins font-semibold text-gradient ss:text-[72px] text-[52px] ">
            Our Promise
          </h1>
          <h3 className="text-center font-poppins font-semibold text-white ss:text-[22px] text-[22px] ">
            We assure you that all your donations will reach the right person on
            right time and be invested in their future.
          </h3>
          <br />
          <p className={`${styles.paragraph} text-center  text-white`}>
            If a single drop of water can start a ripple effect in the ocean
            then one penny from your end can also leave a lasting impression on
            these lives.
            <br /> <span className="font-semibold">Every Penny Counts</span>
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div
          className={`flex-1 flex justify-center items-center md:my-0 my-10 relative py-[50px]  xl:px-0 sm:px-16 px-6`}
        >
          <div
            className="flex flex-col justify-between items-center"
            style={{
              height: "200px",
              marginRight: "50px",
              marginLeft: "30px",
            }}
          >
            <img
              src={volunteering}
              alt="volunteering"
              className="w-[100%] h-[100%] relative z-[5] "
              style={{
                height: "200px",
                marginRight: "50px",
                marginLeft: "30px",
              }}
            />
            <h2 className=" mt-[20px] flex-1 font-poppins font-semibold text-white ss:text-[22px] text-[22px] text-white ">
              Giving Everyday
            </h2>
          </div>

          <div
            className="flex flex-col justify-between items-center"
            style={{
              height: "200px",
              marginRight: "50px",
              marginLeft: "30px",
            }}
          >
            <img
              src={img_1}
              alt="donation"
              className="w-[100%] h-[100%] relative z-[5] "
              style={{
                height: "200px",
                marginRight: "50px",
                marginLeft: "30px",
              }}
            />
            <h2 className=" mt-[20px] flex-1 font-poppins font-semibold text-white ss:text-[22px] text-[22px] text-white ">
              Volunteer
            </h2>
          </div>

          <div
            className="flex flex-col justify-between items-center"
            style={{
              height: "200px",
              marginRight: "50px",
              marginLeft: "30px",
            }}
          >
            <img
              src={fundraising}
              alt="fundraising"
              className="w-[100%] h-[100%] relative z-[5] "
              style={{
                height: "200px",
                marginRight: "50px",
                marginLeft: "30px",
              }}
            />
            <h2 className=" mt-[20px] flex-1 font-poppins font-semibold text-white ss:text-[22px] text-[22px] text-white ">
              Fundraise
            </h2>
          </div>
          <div className="absolute z-[1] w-[100%] h-[100%] rounded-full bottom-40 white__gradient " />
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
