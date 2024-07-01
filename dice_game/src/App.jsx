import { Outlet } from "react-router-dom";
import { DiceProvider } from "./components/context/DiceContext";
import SelectNumber from "./components/SelectNumber";
import MainDice from "./components/MainDice"
import { useState } from "react";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)
  };

  return (
    <DiceProvider>
      { isGameStarted ? <SelectNumber /> : <MainDice toggle={toggleGamePlay} /> }
    </DiceProvider>
  );
}

export default App;
