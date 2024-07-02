import React from "react";
import { Link } from "react-router-dom";

const MainDice = ({ toggle }) => {
  return (
    <>
      <div className="h-screen p-4 flex flex-col justify-center items-center lg:flex-row">
          <div className="part1">
            <img src="images/dices_logo.png" alt="" />
          </div>
          <div className="part2 flex flex-col">
            <h2 className="text-6xl font-bold text-end">Dice Game</h2>
            <div className="w-full relative">
              <button onClick={toggle} className="bg-black text-white px-16 py-1 border-2 transition rounded absolute right-2 hover:bg-white hover:text-black hover:border-2 border-black ease-in-out">Play Now</button>
            </div>
          </div>
      </div>
    </>
  );
};

export default MainDice;
