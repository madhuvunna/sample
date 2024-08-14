import React,{useContext} from "react";
import { CounterContext } from "./CounterContext";

function CounterDisply(){
    const {count} = useContext(CounterContext);

    return(
        <div>
            <h1>Counter:{count}</h1>      
        </div>
    );
}

export default CounterDisply;