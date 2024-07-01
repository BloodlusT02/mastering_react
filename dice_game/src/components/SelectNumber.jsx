  import React, { useState } from "react";
  import RoleDice from "./RoleDice";
  import useDice from "./context/DiceContext";

  const SelectNumber = () => {

    const { selectNumber, setSelectedNumber, score, warning, setWarning } = useDice("Select Number");
    const diceNumbers = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (dice) => {
      setSelectedNumber(dice),
      setWarning("")
    };


    return (
      <>
        <div className="mt-4 flex items-center justify-between px-20">
          <div className="part-1">
            <div className="w-fit p-4 text-center">
              <h1 className="text-7xl font-semibold">{ score }</h1>
              <h3 className="font-medium text-lg">Total Score</h3>
            </div>
          </div>
          <div className="part-2 flex flex-col gap-4">
            <div className="text-red-500 font-medium text-lg">
              <h2 className="text-end">{ warning }</h2>
            </div>
            <div id="mini-part1">
            <div className="flex gap-3">
            {diceNumbers.map((dice, index) => {
              const isSelected = selectNumber === dice;
              return (
                <div
                  key={index}
                  onClick={() => {
                    numberSelectorHandler(dice)
                  }}
                  className={`w-[72px] h-[72px] border-2 font-semibold border-black text-3xl flex justify-center items-center
                  ${isSelected ? "bg-black text-white": ""}`}
                >
                  {dice}
                </div>
              );
            })}
          </div>
            </div>
            <div id="mini-part2" className="">
              <h2 className="font-semibold text-2xl text-end">Select Number</h2>
            </div>
          </div>
        </div>
        <RoleDice />
      </>
    );
  };

  export default SelectNumber;
