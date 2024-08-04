import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col nine-hundred:flex-row items-center justify-between py-4 px-40">
        {/* logo */}
        <div className="part-1 flex items-center gap-2">
          <div className="w-10">
            <img src="/images/logo-gray.png" alt="" />
          </div>
          <div>
            <h1 className="text-[1.6rem] font-inter text-gray-500">
              <span className="font-bold text-gray-500">color</span>Gradient.
            </h1>
          </div>
        </div>
        {/* cretor */}

        {/* <hr className="dark:opacity-30" /> */}

        <div className="part-2 flex mt-7 nine-hundred:mt-0">
          <p className="flex flex-col md:flex-row items-center gap-3 text-gray-500">
            / crafted by{" "}
            <span>
              <img
                className="w-6 rounded-full"
                src="/images/profile.jpg"
                alt=""
              />
            </span>
            <span className="bg-purple-gradient bg-clip-text text-transparent">
                ritik_rajbhar
            </span>
          </p>
        </div>

        {/*  */}
        <div className="part-5 flex gap-2 text-lg mt-5 nine-hundred::mt-0">
          <i className="ri-instagram-line text-gray-500  hover:scale-110 cursor-pointer"></i>
          <i className="ri-facebook-fill text-gray-500  hover:scale-110 cursor-pointer"></i>
          <i className="ri-github-fill text-gray-500  hover:scale-110 cursor-pointer"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
