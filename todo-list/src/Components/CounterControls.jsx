import React,{useContext} from "react";
import { CounterContext } from "./CounterContext";

function CounterControls(){
    const{increment,decrement,reset}= useContext(CounterContext);

    return(
        <div>
            <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
            <button onClick={decrement} style={{ marginRight: '10px' }}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default CounterControls;