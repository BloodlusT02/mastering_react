import React, { useState } from "react";
import useDice from "./context/DiceContext";
import Rules from "./Rules";

const RoleDice = () => {

  const [showRules, setShowRules] = useState(false);

  const { rollDice, diceNumber, setScore } = useDice();
  const restartGame = () => {
    setScore(0);
  };

  const toggleRules = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <>
      <div id="container" className="h-96 mt-2 flex flex-col items-center py-2">
        <div onClick={rollDice} className="w-48 h-48">
          <img
            className="w-full h-full object-cover"
            src={`images/dices/dice_${diceNumber}.png`}
            alt=""
          />
        </div>
        <h3 className="font-medium mt-1 text-lg">Click To Roll The Dice</h3>

        <div className="flex flex-col gap-4 mt-8">
          <button
            onClick={restartGame}
            className="bg-white text-black px-12 py-1 border-2 rounded font-semibold border-black"
          >
            Restart Game
          </button>
          <button onClick={toggleRules} className="bg-black text-white font-semibold px-12 py-1 border-2 rounded border-black">
            { showRules ? "Hide" : "Show" } Rules
          </button>
        </div>
      </div>
      { showRules && <Rules /> }
    </>
  );
};

export default RoleDice;
