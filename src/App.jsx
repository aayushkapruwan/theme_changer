import { useEffect, useState } from "react";
import Card from "./components/card";
import Toggle from "./components/toggle";
import { ThemeProvider } from "./context/themecontext";
function App() {
  const [themeMode,setthememode]=useState("light")
  const lighttheme=()=>{
    setthememode("light")
  }
  const darktheme=()=>{
    setthememode("dark")
  }
  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])
  return (
    <>
      <ThemeProvider value={{themeMode,lighttheme,darktheme}}>
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex flex-col gap-6 w-full justify-center items-center px-4 py-10">
          <div className="text-center mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">Theme Changer</h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">Switch between light and dark modes</p>
          </div>
          <Card />
          <Toggle />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
