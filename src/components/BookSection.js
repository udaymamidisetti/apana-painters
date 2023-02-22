import React from "react";

const BookSection = () => {
  return (
    <div
      className="bg-cover h-[38.125rem] font-poppins flex justify-evenly items-center"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/drjnmxyd5/image/upload/v1677001698/pexels-rachel-claire-4846106_1_dthqhs.png)",
      }}
    >
      <div>
        <p className="font-bold text-[3rem] leading-[3.6rem] flex items-center w-[31.69rem] text-white">
          Book Free Painting Consultation Now
        </p>
        <div className="text-[1.13rem] leading-[1.41rem] flex items-center w-[40.13rem] h-[6.38rem] text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text
          of the printin
        </div>
      </div>
      {/* <div className="bg-white rounded-large shadow-[8px_8px_65px_rgba(0,_0,_0,_0.25)]  w-[31.25rem] h-[29.5rem]">
        <div className="text-gray-900">
          <div className="rounded-2xxs box-border w-[24.13rem] h-[2.5rem] flex flex-row py-[0.69rem] px-[0.94rem] items-center justify-start border-[1px] border-solid border-gray-900">
            <div className=" leading-[3.6rem] flex items-center w-[7.81rem] h-[0.81rem] shrink-0">
              Enter Full Name
            </div>
          </div>
          <div className=" top-[11.31rem] left-[3.56rem] rounded-2xxs box-border w-[24.13rem] h-[2.5rem] flex flex-row py-[0.69rem] px-[0.94rem] items-center justify-start border-[1px] border-solid border-gray-900">
            <div className=" leading-[3.6rem] flex items-center w-[5.5rem] h-[1.19rem] shrink-0">{`Enter Email `}</div>
          </div>
          <div className=" top-[14.81rem] left-[3.56rem] rounded-2xxs box-border w-[24.13rem] h-[2.5rem] flex flex-row py-[0.69rem] px-[0.94rem] items-center justify-start gap-[15.88rem] border-[1px] border-solid border-gray-900">
            <div className=" leading-[3.6rem] flex items-center w-[5.38rem] h-[1.31rem] shrink-0">{`Select City `}</div>
            <img
              className=" w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden"
              alt=""
              src="../materialsymbolsarrowdropdownrounded.svg"
            />
          </div>
          <div className=" top-[18.31rem] left-[3.56rem] rounded-2xxs box-border w-[24.13rem] h-[4.38rem] flex flex-row py-[0.69rem] px-[0.94rem] items-start justify-start border-[1px] border-solid border-gray-900">
            <div className=" leading-[3.6rem] flex items-center w-[6.88rem] h-[0.94rem] shrink-0">
              Enter Address
            </div>
          </div>
          <div className=" top-[7.81rem] left-[3.56rem] w-[24.13rem] h-[2.5rem]">
            <div className=" top-[0rem] left-[0rem] rounded-2xxs box-border w-[24.13rem] h-[2.5rem] flex flex-row py-[0.69rem] pr-[0.94rem] pl-[3.25rem] items-center justify-start border-[1px] border-solid border-gray-900">
              <div className=" leading-[3.6rem]">Enter WhatsApp Number</div>
            </div>
            <div className=" top-[0rem] left-[0rem] rounded-2xxs box-border w-[2.75rem] h-[2.5rem] flex flex-row py-[0.69rem] pr-[0.94rem] pl-[0.5rem] items-center justify-center border-[1px] border-solid border-gray-900">
              <div className=" leading-[3.6rem] flex items-center w-[1.69rem] h-[2.19rem] shrink-0">
                +91
              </div>
            </div>
          </div>
          <div className=" top-[24.13rem] left-[3.56rem] rounded-2xxs bg-darkorange-200 w-[24.13rem] h-[3.06rem] flex flex-row py-[0rem] px-[0.63rem] box-border items-center justify-center text-[1.13rem] text-white">
            <div className=" leading-[3.6rem] font-medium">Submit</div>
          </div>
        </div> */}
      <div className="flex flex-col justify-center items-center bg-white rounded-3xl shadow-[8px_8px_65px_rgba(0,_0,_0,_0.25)]  w-[31.25rem] h-[29.5rem]">
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
              className="text-[#000000B2] text-[1rem] px-[0.94rem]  border block w-full flex-1 rounded-none rounded-r-md border-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm font-poppins"
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
            <option className="text-[#000000B2]">United States</option>
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
  );
};

export default BookSection;
