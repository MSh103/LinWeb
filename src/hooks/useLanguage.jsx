import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function useLanguage()
{
        const value = useContext(LanguageContext);

        // // console.log("LanguageContext: " + value); // debug

        return value;
}