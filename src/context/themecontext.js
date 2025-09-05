import { createContext } from "react";

export const themecontext=createContext({
    themeMode:"light",
    lighttheme:()=>{
        
    },
    darktheme:()=>{

    }
})

export const ThemeProvider =themecontext.Provider
