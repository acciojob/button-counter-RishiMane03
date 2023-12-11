import React, { useState } from "react";


const Count = ()=>{
    let [count,setCount] = useState(0)
    function counter(){
        setCount(count+1)
    }
    return(
        <>
            <p>Button clicked {count} times</p>
            <button onClick={counter}>Click</button>
        </>
    )
}

export default Count