import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children})
{
        const [dark, setDark] = useState(() => {
                const savedTheme = localStorage.getItem("theme");
                
                if(savedTheme !== null)
                        return savedTheme === "dark";

                return window.matchMedia("(prefers-color-scheme: dark)");
        }); 

        useEffect(() => {
                const media = window.matchMedia("(prefers-color-scheme: dark)");

                const handler = (e) => {
                        if(localStorage.getItem("theme") === null)
                                setDark(e.matches);
                };

                media.addEventListener("change", handler);

                return () => media.removeEventListener("change", handler);
        }, []);

        useEffect(()=>{
                document.documentElement.classList.toggle("light", !dark);
                document.documentElement.classList.toggle("dark", dark);

                localStorage.setItem('theme', dark ? "dark" : "light");
        }, [dark]);

        return (
                <ThemeContext.Provider value={{dark, setDark}}>
                        {children}
                </ThemeContext.Provider>
        );
}
