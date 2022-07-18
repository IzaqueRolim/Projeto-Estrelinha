import { createContext, useState } from "react";

export const darkModeContext = createContext(false)

export const DarkModeProvider = ({children}) =>{

    const [dark,setDark] = useState(false);

    function changeDark(){
        if(dark){
            setDark(false)
        }
        else{
            setDark(true)
        }
    }

    return(
        <darkModeContext.Provider value={[dark,changeDark]}>
                {children}
        </darkModeContext.Provider>
    )
}