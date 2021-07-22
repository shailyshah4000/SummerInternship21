import React, { createContext } from "react";
import ComA from "./ComA";


const firstname=createContext();
const lastname=createContext();

const App=()=>{

    return(
        <>
        <firstname.Provider value={"Rajal"}> 
            <lastname.Provider value={"shah"}>
            <ComA />
            </lastname.Provider>
        </firstname.Provider>
        </>
     );
};

export default App;
export {firstname,lastname};