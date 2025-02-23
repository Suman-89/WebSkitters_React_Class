import React, { useState } from 'react'

export default function Count() {

    const[count,setCount]=useState(0);

    // console.log(count,"Value of count");

    const increment = () =>{
        if(count < 10) setCount(count+1);
        if(count == 10) alert("Please stop !! can't go further !!");
    }

    const decrement = () =>{
        if(count > 0) setCount(count-1);
        if(count == 0) alert("Sorry can't go down !!");
    }

  return (
    <>
      <h1>Value of Current State - {count}</h1>
      <button type="button" onClick={increment}>Increment</button>&nbsp;&nbsp;
      <button type="button" onClick={decrement}>Decrement</button>
    </>
  )
}
