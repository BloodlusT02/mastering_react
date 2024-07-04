import React from "react";

const TopSection = ({
  searchFood,
  filterFoodBtn,
  filterBtns,
  selectedType,
}) => {
  return (
    <>
      <div className="h-48 bg-[#323334] px-4 flex flex-col items-center justify-center py-10">
        <div className="w-full flex flex-col items-center gap-5 px-8 lg:flex-row lg:justify-between lg:px-20">
          <img className="w-56" src="/images/foody_zone.svg" alt="logo_img" />
          <div className="flex items-center border-2 pl-2 pr-4 border-[#FF0909] rounded">
            <input
              onChange={searchFood}
              className="bg-transparent text-white border-[#FF0909] outline-none rounded py-2 w-full px-2 text-lg lg:w-96"
              type="text"
              name=""
              placeholder="Search Food...."
            />
            <i className="ri-search-line text-white opacity-70"></i>
          </div>
        </div>

        <div className="mt-6 flex gap-3 justify-center">
          {filterBtns.map((value, index) => {
            const isSelected = selectedType === value.type;
            return (
              <p
                onClick={() => filterFoodBtn(value.type)}
                key={index}
                className={`bg-[#FF4343] w-fit text-lg rounded text-white px-3 py-1 cursor-pointer hover:translate-y-[-3px] transition ease-in-out ${
                  isSelected ? "bg-green-600" : ""
                }`}
              >
                {value.name}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopSection;
