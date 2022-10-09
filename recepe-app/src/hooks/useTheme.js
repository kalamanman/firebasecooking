import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export const useTheme =()=>{
    const  context =useContext(ThemeContext)
    if(context === undefined){
        console.log('To useTheme hook the component has to be wrapped by themeProvider')
    }
    console.log(context)
    return context
    
}