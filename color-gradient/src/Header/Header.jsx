import React, { useState, useEffect } from "react";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [darkMode, setDarkMode] = useState("dark");

  useEffect(() => {

    const htmlEl = document.querySelector("html");

    if (isChecked) {
      setDarkMode("light");
      htmlEl.classList.remove("light");
      htmlEl.classList.add("dark");
    } else {
      setDarkMode("dark");
      htmlEl.classList.remove("dark");
      htmlEl.classList.add("light");
    }
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  

  return (
    <>
      <div className="flex items-center justify-between py-6 px-6 md:px-10 lg:px-36">
        <div className="part-1 flex items-center gap-1">
          <div className="w-9 md:w-10 lg:w-12">
            <img className="object-cover" src="/images/logo.png" alt="" />
          </div>
          <div>
            <h1 className="text-[1.7rem] lg:text-[1.8rem] font-inter dark:text-white">
              <span className="dark:text-white font-semibold">color</span>Gradient.
            </h1>
          </div>
        </div>
        <div className="part-2 flex"></div>
        <div className="flex items-center gap-2">
          <div className="hidden lg:block font-inter text-[1rem] dark:text-white">{darkMode} mode</div>
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="sr-only"
              />
              <div
                className={`block h-5 w-9 rounded-full ${
                  isChecked ? "bg-purple-gradient" : "bg-[#E5E7EB]"
                }`}
              ></div>
              <div
                className={`dot absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${
                  isChecked ? "translate-x-5" : "translate-x-0.5"
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
