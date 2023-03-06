import React from "react";

const PainterRegistration = () => {
  return (
    <div
      className="h-screen w-screen bg-cover flex justify-center items-center"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/drjnmxyd5/image/upload/v1677150027/pexels-rachel-claire-4846106_1_ekh5fa.svg)",
      }}
    >
      <div>
        <h1 className="mb-[1.25rem] text-center w-[30.8125rem] text-[3rem] font-poppins font-bold text-[#ffffff] leading-[3.6rem]">
          Painter Registration
        </h1>
        <p className="mb-[3.25rem] text-center w-[30.8125rem] text-[#ffffff] font-normal leading-[1.4125rem] font-poppins">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing{" "}
        </p>
        <div className=" flex flex-col justify-center items-center bg-white rounded-3xl shadow-[8px_8px_65px_rgba(0,_0,_0,_0.25)]  w-[30.8125rem] h-[29.5rem]">
          <input
            className="text-[#000000B2] mb-[1rem] text-[1rem] py-[0.69rem] px-[0.94rem] rounded-md leading-[3.6rem] flex items-center rounded-2xxs box-border w-[24.13rem] h-[2.5rem] border-[1px] border-solid border-gray-900 focus:outline-0"
            placeholder="Enter Full Name"
            type="text"
          />
          <div className="mb-[1rem] col-span-3 sm:col-span-2">
            <div className="mt-1 flex rounded-md shadow-sm w-[24.13rem] h-[2.5rem]">
              <span className="text-[#000000B2] inline-flex items-center rounded-l-md border border-r-0 border-gray-900 bg-gray-50 px-3 text-[1rem] text-gray-500 font-poppins">
                +91
              </span>
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="text-[#000000B2] text-[1rem] px-[0.94rem]  border block w-full flex-1 rounded-none rounded-r-md border-gray-900 sm:text-sm font-poppins focus:outline-0"
                placeholder="Enter Whatsapp Number"
              />
            </div>
          </div>
          <input
            className="text-[#000000B2] mb-[1rem] text-[1rem] py-[0.69rem] px-[0.94rem] rounded-md leading-[3.6rem] flex items-center rounded-2xxs box-border w-[24.13rem] h-[2.5rem] border-[1px] border-solid border-gray-900 focus:outline-0"
            placeholder="Enter Email"
            type="text"
          />
          <div className="mb-[1rem] col-span-6 sm:col-span-3">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="text-[#000000B2] text-[1rem] mt-1 block w-[24.13rem] h-[2.5rem] rounded-md border border-gray-900 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option className="text-[#000000B2]">Select City</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <textarea
            className="text-[#000000B2] mb-[1rem] text-[1rem] px-[0.94rem] w-[24.13rem] h-[4.38rem] border rounded-md leading-[3.6rem] border-gray-900 focus:outline-0"
            placeholder="Enter Address"
          ></textarea>
          <div className="rounded-md bg-Beer w-[24.13rem] h-[3.06rem] flex flex-row py-[0rem] px-[0.63rem] box-border items-center justify-center text-[1.13rem] text-white">
            <div className=" leading-[3.6rem] font-medium">Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainterRegistration;
