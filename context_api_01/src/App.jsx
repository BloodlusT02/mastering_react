import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/themeContext";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    const htmlEl = document.querySelector("html");
    // Removing Class
    htmlEl.classList.remove("light", "dark");
    // adding class
    htmlEl.classList.add(themeMode);
  }, [themeMode]);


  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto"><Card /></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
