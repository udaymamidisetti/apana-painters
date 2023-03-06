import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      class="bg-cover h-[48rem] w-full flex items-center justify-center flex-col"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/drjnmxyd5/image/upload/v1676980724/pexels-huseyn-kamaladdin-667838_1_kt8nll.jpg)",
      }}
    >
      <div className="max-w-[79.125rem] h-[13.875rem] overflow-scroll scroll-smooth">
        <h1
          className="h-[14.375rem] text-[3.625rem] font-poppins text-white font-bold text-center "
          style={{ color: "#E3E1E1" }}
        >
          Elevate Your Space with Professional
          <br /> Painting Services
        </h1>
        <h1
          className="h-[14.375rem] text-[3.625rem] font-poppins text-white font-bold text-center "
          style={{ color: "#E3E1E1" }}
        >
          Expert Painters for Your Home or Business
        </h1>
        <h1
          className="h-[14.375rem] text-[3.625rem] font-poppins text-white font-bold text-center "
          style={{ color: "#E3E1E1" }}
        >
          From Concept to Completion, We've Got <br />
          You Covered
        </h1>
      </div>
      <div>
        <button
          className="w-[12.5rem] h-[3.4375rem] rounded-md leading-6 text-[1.375rem] text-white font-poppins"
          style={{
            background: "linear-gradient(135deg, #97ABFF 0%, #123597 100%)",
            color: "white",
          }}
        >
          Equire Now
        </button>
        <Link to="/registration">
          <button
            className="w-[12.5rem] h-[3.4375rem] rounded-md leading-6 text-[1.375rem] font-poppins ml-[0.955rem]"
            style={{
              background: "linear-gradient(135deg, #97ABFF 0%, #123597 100%)",
              color: "white",
            }}
          >
            Registration
          </button>
        </Link>
      </div>
      <div
        className="w-[10rem] h-[3.1875rem] flex items-center justify-center mt-[8.21875rem]"
        style={{ backgroundColor: "#000000" }}
      >
        <img
          className="h-[1.9375rem]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904"
          alt=""
        />
        <p className="font-poppins font-bold" style={{ color: "white" }}>
          WhatsApp
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
