import React, { useState } from "react";
import { useContext, createContext } from "react";

export const diceContext = createContext();

export const DiceProvider = ({ children }) => {

  const [selectNumber, setSelectedNumber] = useState(null);
  const [diceNumber, setDiceNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [warning, setWarning] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setDiceNumber(randomNumber);

    if(!selectNumber){
        setWarning("You have not selected any number")
        return;
    };

    if(selectNumber === randomNumber){
        setScore((prev) => prev + randomNumber);
    }else{
        setScore((prev) => prev - 2)
    };
    setSelectedNumber(null);
  };

  return (
    <diceContext.Provider
      value={{
        selectNumber,
        setSelectedNumber,
        diceNumber,
        setDiceNumber,
        rollDice,
        score,
        setScore,
        warning,
        setWarning
      }}
    >
      {children}
    </diceContext.Provider>
  );
};

export default function useDice() {
  return useContext(diceContext);
}
