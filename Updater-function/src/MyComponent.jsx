import React,{useState} from "react"

function MyComponent(){
     const[count,setCount]= useState(0);

    function increment(){
        setCount(c=>c+1);
        setCount(c=>c+1);
        setCount(c=>c+1);
     };

    function decrement(){
        setCount(c=>c-1);
        setCount(c=>c-1);
        setCount(c=>c-1);
     };

    function reset(){
        setCount(0);
    };
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Deccrement</button>
        </div>
    );
}

export default MyComponent