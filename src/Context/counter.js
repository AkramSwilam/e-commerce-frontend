import { createContext, useState } from "react";

export let CounterContextProvider= createContext()

export function CounterContextProvide(props) {
    
   // eslint-disable-next-line react-hooks/rules-of-hooks
   let [counter,setCounter]=useState(0)

   function changeCounter() {
    setCounter(Math.random())
   }

    return <CounterContextProvider.Provider value={{counter,changeCounter}}>
        {props.children}
    </CounterContextProvider.Provider>
}