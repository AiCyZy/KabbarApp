import { createContext, useState } from "react";


export const IntentContext = createContext()
export const IntentContextProvider = (props) =>{

    const {children} = props;

    //data chung
    const [islogin, setIslogin] = useState(false)
    const [infouser, setInfouser] = useState({})

    return(
        <IntentContext.Provider value={{islogin, setIslogin, infouser, setInfouser}}>
            {children}
        </IntentContext.Provider>
    )
}