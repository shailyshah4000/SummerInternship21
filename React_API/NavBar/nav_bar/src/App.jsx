import React from "react";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Service from "./Service";
import { Route,Switch } from "react-router-dom";
import User from "./User"
import Navbar from "./Navbar";

const App=()=>{
    const name=()=>{
       return  <h1>this is name page!.</h1>
    }

    return(
        <>
        <div class="menu">
        <Navbar />
        <Switch>
            <Route  exact path="/" component={()=><About name='About' />} />
           {/* <Route exact path="/contact" component={Contact} />  */ }              {/* using componet */}
            <Route exact path="/contact" render={()=><Contact name="Contact" />} /> 
            <Route exact path="/Service" component={Service} />
            <Route exact path="/contact/name" component={name} />
            <Route exact path="/User/:fname/:lname" component={User} />
            <Route  component={Error} />
        </Switch>

           {/* <About />
            <Contact />*/}
        </div>
        </>
    );
};
export default App;