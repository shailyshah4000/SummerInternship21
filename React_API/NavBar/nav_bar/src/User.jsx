//using useparams. 
/*import React from "react";
import { useParams } from "react-router-dom";

// const User = ({match}) =>{
//     return <h1>user {match.params.fname} page</h1>;            //without Hooks.
// };

const User =()=>{                                     //using useParms Hooks.
    const {fname}=useParams();
        return <h1>user {fname} page.</h1>

}

export default User;*/

//using location

import React from "react";
import { useParams,useLocation } from "react-router-dom";

const User = () =>{
    const {fname,lname}=useParams();
    const location=useLocation();
    console.log(location);

    return(
        <>
            <h1>user {fname} {lname}</h1>
            <p>my current location is {location.pathname}</p>
            {location.pathname===`/User/shaily/shah` ? <button onClick={()=>{alert("thank for clicking!!.")}}>Click Me</button> : null}
        </>
    )
}

export default User;

