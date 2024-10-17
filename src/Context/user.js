import { createContext, useState } from "react";

export let UserContext= createContext();

export function UserContextProvider(props) {
    let [userToken,setUserToken]=useState(localStorage.getItem("userToken")?? "")
    
    return <UserContext.Provider value={{userToken,setUserToken}}>

        {props.children}
    </UserContext.Provider>
}
