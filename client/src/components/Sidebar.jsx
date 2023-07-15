import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { logo } from "../assets";
import { navlinks } from "../constants";
import { Context } from "../context/Context";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && "bg-[#2c2f32]"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
      />
    )}
  </div>
);

const Sidebar = () => {
  const history = useHistory();
  const [isActive, setIsActive] = useState("dashboard");
  const { user, dispatch } = useContext(Context);

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
      </Link>

      <div className="flex-1 flexflex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (link.done == "false") {
                  setIsActive(link.name);
                  history.push(link.link);
                } else {
                  if (link.done == "true") {
                    // {
                    //   user && "LOGOUT";
                    // }
                    dispatch({ type: "LOGOUT" });
                    history.push("/");
                  }
                }
              }}
            />
          ))}
        </div>
        {/* <div className="absolute inset-x-0 bottom-0 flex flex-col items-center">
          <Icon styles="bg-[#1c1c24] shadow-secondary " imgUrl={sun} />
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;