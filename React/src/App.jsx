/*
//hooks in react
import React,{useState} from 'react';
const App=()=>{

    const state=useState();
    const [count,setCount]=useState(0);

    const IncNum=()=>{
        setCount(count+1);
    };

    return(
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click Me</button>
        </>
    );
};
export default App;*/

//Events in react
import React, {useState} from 'react';
const App=()=>{
    const purple="#8e44ad";
    const [bg,setBg]=useState(purple);
    const [name,newName]=useState('Click ME');
    const bgChange =() =>{
        let newBg='#34495e';
        setBg(newBg);
        newName("Ouch!!");
    };

    const bgBack=()=>{
        setBg(purple);
        newName('ahyo :angry')
    }

    return(
        <>
            <div style ={{backgroundColor:bg}}>
                <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
            </div>
        </>
    );
};

export default App;