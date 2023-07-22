import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { rotohero } from "../assets";
require("dotenv").config();

//tempalteid:- template_uwp97ec
//service_id:-tracker@forchange
//private key:- VTvNKhPSz1msqJ51l

const Contact_Details = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //emailjs.init("process.env.EMAILJS_PUBLIC_KEY");
    // emailjs.init("process.env.EMAILJS_SERVICE_ID");
    // emailjs.init("process.env.EMAILJS_TEMPLATE_ID");
    // console.log(process.env.EMAILJS_SERVICE_ID);
    // console.log(import.meta.env.EMAILJS_SERVICE_ID);
    emailjs
      .send(
        // process.env.EMAILJS_SERVICE_ID,
        // process.env.EMAILJS_TEMPLATE_ID,
        "tracker@forchange",
        "template_uwp97ec",
        {
          from_name: form.name,
          to_name: "RotoFund",
          from_email: form.email,
          to_email: "tracker.forchange@gmail.com",
          message: form.message,
        },
        // process.env.EMAILJS_PUBLIC_KEY
        "rUVAtQNcQ5O6j5E6c"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 gap-10 overflow-hidden`}>
      <div className=" justify-between items-center w-full mb-[50px]">
        <h1 className="text-center text-gradient font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
          Small Actions x Lots of People = "Big Change"
        </h1>
      </div>

      <div
        className={`xl:mt-12 flex xl:flex-row flex-row gap-10 overflow-hidden`}
      >
        <div className="mr-[30px] flex-[0.75] bg-black-100 p-8 rounded-2xl ">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              send
            </button>
          </form>
        </div>

        <div
          className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}
        >
          <img
            src={rotohero}
            alt="hero-image"
            className="w-[100%] h-[100%] relative z-[5] "
            style={{
              borderRadius: "67% 33% 76% 24% / 41% 59% 41% 59%  ",
              height: "600px",
              marginRight: "50px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact_Details, "contactDetails");
