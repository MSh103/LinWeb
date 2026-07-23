import { createContext, useContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({children})
{
        const [language, setLanguage] = useState(() =>{
                const savedLanguage = localStorage.getItem("lang");

                if(savedLanguage !== null)
                        return savedLanguage;

                return "ar";
        });

        useEffect(()=>{
                document.documentElement.lang = language;

                localStorage.setItem("lang", language);
        }, [language]);

        return (
                <LanguageContext.Provider value={{language, setLanguage}}>
                        {children}
                </LanguageContext.Provider>
        );
}
