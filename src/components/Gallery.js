import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Gallery = () => {
  return (
    <div>
      <Header />
      <div
        className="h-[26.299375rem] w-full bg-cover flex"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/drjnmxyd5/image/upload/v1677218997/unsplash_9M66C_w_ToM_6_paumwh.png)",
        }}
      >
        <div className="w-[63.1875rem] h-[7.8125rem] flex flex-col justify-center items-center m-auto">
          <h1 className="text-center font-bold font-poppins text-[#ffffff] text-[2.875rem]">
            Apana Painter Painting Work Gallery
          </h1>
          <p className="text-[#ffffff] text-center font-poppins">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem IpsumLorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum
          </p>
        </div>
      </div>
      <div className="mt-[5rem] rounded-xl w-[77.5rem] h-[52.875rem] m-auto bg-[#F7941D0D] flex flex-col justify-evenly">
        <div className="flex justify-center gap-[1.875rem]">
          <div>
            <img
              className="rounded-xl"
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677222846/image_3_1_fr2u7f.png"
              alt=""
            />
            <p className="font-poppins">wall texture design</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677222851/Frame_42_1_svbuai.png"
              alt=""
            />
            <p className="font-poppins">wall texture design</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677222857/Frame_43_2_w8ynvt.png"
              alt=""
            />
            <p className="font-poppins">Interior Holl Painting work</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677222862/Frame_44_1_xjshze.png"
              alt=""
            />
            <p className="font-poppins">Kitchan Painting work</p>
          </div>
        </div>
        <div className="flex justify-center gap-[1.875rem]">
          <div>
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677223179/Frame_41_1_wmlawj.png"
              alt=""
            />
            <p className="font-poppins">wall texture design</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677223185/Frame_42_2_vuelzg.png"
              alt=""
            />
            <p className="font-poppins">wall texture design</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677223190/Frame_43_3_o7frrk.png"
              alt=""
            />
            <p className="font-poppins">Interior Holl Painting work</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677223196/Frame_44_2_cmx1qj.png"
              alt=""
            />
            <p className="font-poppins">Kitchan Painting work</p>
          </div>
        </div>
        <div className="flex justify-center gap-[1.875rem]">
          <div>
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677223301/Frame_41_2_itbhh8.png"
              alt=""
            />
            <p className="font-poppins">wall texture design</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677223309/Frame_42_3_drjh5w.png"
              alt=""
            />
            <p className="font-poppins">wall texture design</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677223313/Frame_43_4_flzyco.png"
              alt=""
            />
            <p className="font-poppins">Interior Holl Painting work</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677223318/Frame_44_3_pnxjzk.png"
              alt=""
            />
            <p className="font-poppins">Kitchan Painting work</p>
          </div>
        </div>
      </div>
      <button className="bg-Beer text-[#ffffff] font-poppins w-[11.75rem] h-[2.8125rem] rounded-md m-auto block mt-[1.5625rem] mb-[1.5625rem]">
        View More
      </button>
      <Footer />
    </div>
  );
};

export default Gallery;
