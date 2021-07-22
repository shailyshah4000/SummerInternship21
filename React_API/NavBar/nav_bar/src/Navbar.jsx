import React from "react";
import {NavLink} from "react-router-dom";

const Navbar=()=>{
    return (
        <>
            <NavLink exact  activeClassName="active_class"  to="/">About Us</NavLink>
            <NavLink exact  activeClassName="active_class" to="/Contact">Contact Us</NavLink>    {/*without reload*/}
            <NavLink exact  activeClassName="active_class" to="/User">User</NavLink>  
            <NavLink exact  activeClassName="active_class" to="/Service">Service Us</NavLink>
            <br></br>

           { //<a href="/">AboutUs</a>                     {/*with reload*/}
            //<a href="/Contact">ContactUs</a>
             }
        </>
    )
};

export default Navbar;