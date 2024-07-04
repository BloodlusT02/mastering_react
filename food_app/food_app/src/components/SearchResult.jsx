import React from "react";
import { BASE_URL } from "../App";

const SearchResult = ({ foodData }) => {
  return (
    <>
      <div className="w-full max-w-[1060px] flex flex-wrap gap-x-5 gap-y-4 justify-center mx-auto pb-4">
        {foodData?.map((food, index) => {
          return (
            <div
              key={index}
              className="w-[340px] h-[170px] flex items-center gap-5 px-3 text-white relative bg-gradient-to-br from-opacity-10 via-transparent to-opacity-0 backdrop-filter backdrop-blur-lg rounded-lg border border-opacity-20 border-white shadow-lg"
            >
              <div className="part1">
                <img className="w-80" src={BASE_URL + food.image} alt="" />
              </div>
              <div className="part2">
                <h2 className="font-semibold">{food.name}</h2>
                <p className="text-xs my-2 opacity-80">{food.text}</p>
                <div className="flex justify-end mt-4">
                  <button className="bg-[#FF4343] w-fit text-sm rounded text-white px-3 py-1 cursor-pointer hover:bg-[#FF0909] border-none mr-6">
                    $ {food.price.toFixed(2)}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResult;
