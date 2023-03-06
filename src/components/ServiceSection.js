import React from "react";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <div className="w-full h-[47.8125rem]">
      <div className="container relative h-[47.8125rem] m-auto mt-[2.5rem]">
        <div className="w-[55.8125rem] m-auto">
          <div
            className="leading-[3.6rem] text-[2.25rem] font-semibold font-poppins text-center"
            style={{ color: "#000000" }}
          >
            Apna Painter Painting Services
          </div>
          <div className="text-[#000000] text-[1.125rem] mt-[0.993125rem] leading-[1.41rem] text-center flex items-center justify-center font-normal">
            “Transform Your Space with Apna Painting Services. Interior Painting
            , Exterior Painting ,Water Proffing , Wall Textures , Wool Coting
            ,and Metal Painting"
          </div>
        </div>
        <div className=" w-[55.8125rem] m-auto flex flex-wrap justify-center gap-[0.937rem] shrink-0 mt-[2.756875rem]">
          <Link to="/interiorpaintingservices">
            <div className="w-[12.5rem] h-[14.375rem] cursor-pointer">
              <img
                className="w-[13rem] h-[13rem] object-cover"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676986361/Ellipse_1_bss0jw.svg"
                alt=""
              />
              <p className="leading-[1.41rem] font-medium text-center text-[1.375rem] mt-[0.625rem]">
                Interior Painting
              </p>
            </div>
          </Link>
          <Link to="/exteriorpaintingservices">
            <div>
              <img
                className="w-[13rem] h-[13rem] object-cover cursor-pointer"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676988394/Ellipse_2_bvgtq8.svg"
                alt=""
              />
              <p className="leading-[1.41rem] font-medium text-center text-[1.375rem] mt-[0.625rem]">
                Exterior Painting
              </p>
            </div>
          </Link>
          <Link to="/waterproffing">
            <div>
              <img
                className="w-[13rem] h-[13rem] object-cover cursor-pointer"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676988422/Ellipse_3_akywzl.svg"
                alt=""
              />
              <p className="leading-[1.41rem] font-medium text-center text-[1.375rem] mt-[0.625rem]">
                Water Puffing
              </p>
            </div>
          </Link>
          <Link to="/walltexture">
            <div>
              <img
                className="w-[13rem] h-[13rem] object-cover cursor-pointer"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676988623/Ellipse_5_v25uik.svg"
                alt=""
              />
              <p className="leading-[1.41rem] font-medium text-center text-[1.375rem] mt-[0.625rem]">
                Wall Textures
              </p>
            </div>
          </Link>
          <Link to="/woodpainting">
            <div className="cursor-pointer">
              <img
                className="w-[13rem] h-[13rem] object-cover"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676988511/Ellipse_4_gkzszq.svg"
                alt=""
              />
              <p className="leading-[1.41rem] font-medium text-center text-[1.375rem] mt-[0.625rem]">
                Wood Painting
              </p>
            </div>
          </Link>
          <Link to="/metalpainting">
            <div>
              <img
                className="w-[13rem] h-[13rem] object-cover cursor-pointer"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676988553/Ellipse_6_rw5ym8.svg"
                alt=""
              />
              <p className="leading-[1.41rem] font-medium text-center text-[1.375rem] mt-[0.625rem]">
                Metal Painting
              </p>
            </div>
          </Link>
        </div>
        {/* <div className="container absolute flex justify-between m-auto bottom-[0rem] left-[0rem] top-[20rem] right-0 w-[90rem] h-[22.76rem]">
          <img
            className="w-[26.18rem] h-[25.53rem] object-cover"
            alt=""
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676990547/portrait-repairer-woman-with-painting-roller-isolated_2_mq1zto.png"
          />
          <img
            className="top-[-3.12rem] left-[66.38rem] w-[23.63rem] h-[25.53rem] object-cover"
            alt=""
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676990568/portrait-repairer-woman-with-painting-roller-isolated_3_rjl7a8.png"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ServiceSection;
