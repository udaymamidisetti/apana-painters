import React from "react";
import Footer from "../Footer";

const InteriorPaintingService = () => {
  return (
    <div>
      <nav
        class="bg-transparent h-[3.75rem] w-full h-[36.25rem] bg-cover flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/drjnmxyd5/image/upload/v1677173533/unsplash_9M66C_w_ToM_njmvta.png)",
        }}
      >
        <div class="mx-auto max-w-[90rem] px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                {/* <!--
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    --> */}
                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!--
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    --> */}
                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4 w-[55.3125rem] sm-width-auto shrink">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a
                    href="/"
                    class="flex-1 shrink relative leading-[1.38rem] text-[#ffffff] font-poppins leading-6 text-[1.5rem]  flex justify-center"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    class="flex-1 shrink relative leading-[1.38rem] text-[#ffffff] font-poppins leading-6 text-[1.5rem] flex justify-center"
                  >
                    Services
                  </a>

                  <a
                    href="#"
                    class="flex-1 shrink relative leading-[1.38rem] text-[#ffffff] font-poppins leading-6 text-[1.5rem] flex justify-center"
                  >
                    Paint
                  </a>

                  <a
                    href="#"
                    class="flex-1 shrink relative leading-[1.38rem] text-[#ffffff] font-poppins leading-6 text-[1.5rem]  flex justify-center"
                  >
                    ShadeCard
                  </a>
                  <a
                    href="#"
                    class="flex-1 shrink relative leading-[1.38rem] text-[#ffffff] font-poppins leading-6 text-[1.5rem]  flex justify-center"
                  >
                    Gallery
                  </a>
                  <a
                    href="#"
                    class="flex-1 shrink relative leading-[1.38rem] text-[#ffffff] font-poppins leading-6 text-[1.5rem]  flex justify-center"
                  >
                    About
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <button
          type="button"
          class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span class="sr-only">View notifications</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button> */}

              {/* <!-- Profile dropdown --> */}
              {/* <div class="relative ml-3">
                <button
                  className="leading-[1.38rem] bg-Beer w-36 h-11 rounded-md ml-20 leading-6 font-poppins text-[1.5rem] text-white"
                  style={{ color: "white" }}
                >
                  Login
                </button> */}

              {/* <div>
            <button
              type="button"
              class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          </div> */}

              {/* <!--
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    --> */}
              {/* <div
            class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1"
          >
            {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
              {/* <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-0"
            >
              Your Profile
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-1"
            >
              Settings
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-2"
            >
              Sign out
            </a>
          </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href="#"
              class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>

            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>

            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>

            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
        <div className="w-[63.1875rem] h-[7.8125rem] flex flex-col justify-center items-center m-auto">
          <h1 className="text-center font-bold font-poppins text-[#ffffff] text-[2.875rem]">
            Interior painting Service
          </h1>
          <p className="text-[#ffffff] text-center font-poppins">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem IpsumLorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum
          </p>
        </div>
      </nav>
      <div className="w-full h-[57.625rem] mt-[3.75rem]">
        <div className="h-[30.6875rem] w-[77.585625rem] m-auto flex items-center justify-between">
          <div className="w-[51.58375rem] h-[24.375rem]">
            <h1 className="text-[2.875rem] font-bold leading-[3.6rem] font-poppins">
              Interior Painting
            </h1>
            <p className="text-[1.125rem] font-poppins font-normal leading-[1.75rem] mt-[1.438125rem]">
              1 . High-quality paint from well-known brands <br />2
              .Professional preparation of surfaces to be painted, including
              cleaning, sanding, and filling in cracks and holes <br />
              3. Careful masking and protection of non-painted areas to minimize
              mess and ensure clean lines <br />
              4. Thorough clean-up after the job is done <br />
              5. Experienced and skilled painters with attention to detail{" "}
              <br />
              6. Options for the color consultation and color matching to help
              you choose the right shade for your space <br />
              7.Flexible scheduling to accommodate your needs and timeline Fair
              and transparent pricing with no hidden fees.
            </p>
          </div>
          <div className="h-[30.6875rem] w-[21.13125rem] flex items-center justify-center gap-3">
            <div>
              <img
                className="mb-[0.48125rem] rounded-xl"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677168207/image_4_asagto.png"
                alt=""
              />
              <img
                className="mb-[0.48125rem]"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677168213/Frame_51_vxjeyr.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="mb-[0.48125rem]"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677168219/Frame_47_xymffc.png"
                alt=""
              />
              <img
                className="mb-[0.48125rem]"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677168225/Frame_48_ddo1zj.png"
                alt=""
              />
              <img
                className="mb-[0.48125rem]"
                src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677168232/Frame_49_rxgjhv.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[77.5rem] h-[26.9375rem]  m-auto">
          <h1 className="font-bold text-center text-[2rem] h-[3.625rem]">
            Recent Project Interior Painting
          </h1>
          <div className="h-[21.75rem] border flex items-center justify-evenly rounded-xl">
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677172440/Frame_41_afgisz.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677172429/Frame_42_lzks3l.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677172422/Frame_43_1_bq4dot.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1677172417/Frame_44_qilgue.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default InteriorPaintingService;
