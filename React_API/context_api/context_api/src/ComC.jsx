import React from "react";
import { firstname,lastname } from "./App";

const ComC=()=>{
    return(
        <>
        <firstname.Consumer> 
            {(fname)=>{
                return(
                    <>
                        <lastname.Consumer>
                            {(lname)=>{
                                return <h1>my name is {fname} {lname}</h1>
                            }}
                        </lastname.Consumer>
                    </>
                ) 
                
           }}

        </firstname.Consumer>
        </>
    );
    
};
export default ComC;