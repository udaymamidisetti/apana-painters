import React from "react";

const Header = () => {
  return (
    <>
      <div className="h-16 w-full bg-white shadow-[0px_2px_19px_rgba(0,_0,_0,_0.25)] font-poppins flex items-center justify-center">
        <div className="top-[0.56rem] ml-[17.34rem] w-[55.31rem] h-[2.63rem] flex text-dimgray-200 items-center justify-around">
          <div className="shrink-0 w-[8.94rem] relative leading-[1.38rem] text-[rgba(87,87,87)] font-normal leading-6 text-[1.5rem] flex justify-center">
            Home
          </div>

          <div className="shrink-0 w-[8.94rem] relative leading-[1.38rem] text-[rgba(87,87,87)] leading-6 text-[1.5rem] flex justify-center">
            Services
          </div>

          <div className="shrink-0 w-[8.94rem] relative leading-[1.38rem] text-[rgba(87,87,87)] leading-6 text-[1.5rem] flex justify-center">
            Paint
          </div>

          <div className="shrink-0 w-[8.94rem] relative leading-[1.38rem] text-[rgba(87,87,87)] leading-6 text-[1.5rem] flex justify-center">
            Shade Card
          </div>

          <div className="shrink-0 w-[8.94rem] relative leading-[1.38rem] cursor-pointer text-[rgba(87,87,87)] leading-6 text-[1.5rem] flex justify-center">
            Gallery
          </div>

          <div className="shrink-0 w-[8.94rem] relative leading-[1.38rem] text-[rgba(87,87,87)] leading-6 text-[1.5rem] flex justify-center">
            About
          </div>
        </div>
        <button
          className="leading-[1.38rem] bg-Beer w-36 h-11 rounded-md ml-20 leading-6 font-poppins text-[1.5rem] text-white"
          style={{ color: "white" }}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Header;
