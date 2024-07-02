import React, { useState } from "react";
import RoleDice from "./RoleDice";
import useDice from "./context/DiceContext";

const SelectNumber = () => {
  const { selectNumber, setSelectedNumber, score, warning, setWarning } =
    useDice("Select Number");
  const diceNumbers = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (dice) => {
    setSelectedNumber(dice), setWarning("");
  };

  return (
    <>
      <div className="">
        <div className="h-28 flex items-center justify-between px-8 mt-4 lg:px-28">
          <div className="text-center border-2 p-4 border-black rounded">
            <h3 className="text-xl font-medium">Roll The Dice</h3>
            <p className="text-xl font-medium">&</p>
            <h3 className="text-xl font-medium">Let Fate Decide</h3>
          </div>
          <div className="rounded text-center border-2 border-black p-4">
            <h1 className="text-6xl font-bold">{score}</h1>
            <h3 className="font-medium">Your Score</h3>
          </div>
        </div>
        <div className="text-red-500 font-semibold mt-4 text-lg">
          <h2 className="text-center">{warning}</h2>
        </div>
        {/* select number */}
        <div className="mt-4 flex flex-wrap items-center justify-center px-8 gap-4">
          {diceNumbers.map((dice, index) => {
            const isSelected = selectNumber === dice;
            return (
              <div
                key={index}
                onClick={() => {
                  numberSelectorHandler(dice);
                }}
                className={`w-[110px] h-[90px] border-2 cursor-pointer font-semibold rounded border-black text-3xl flex justify-center items-center lg:w-[78px] lg:h-[78px] ${
                  isSelected ? "bg-black text-white" : ""
                }`}
              >
                {dice}
              </div>
            );
          })}
        </div>
        <div className="px-8 mt-4 flex justify-center">
          <h2 className="w-full max-w-[805px] text-center py-1 text-2xl border-2 border-black font-medium rounded">
            Select Your Choice
          </h2>
        </div>
      </div>
      <RoleDice />
    </>
  );
};

export default SelectNumber;
