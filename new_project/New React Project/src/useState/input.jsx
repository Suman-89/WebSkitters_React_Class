import React, { useState } from 'react'

export default function Input() {
    const[inPut,setInPut] = useState('');
    const[textValue, setTextValue] = useState('');

    const handleChange = (item) =>{
        setInPut(item.target.value);
        // param.target.value
    }
    const showText = () =>{
        setTextValue(inPut);
    }
  return (
    <>
      <input type="text" onChange={handleChange}/> &nbsp;
      <button onClick={showText}>Submit</button>
      <h2>{textValue}</h2>
    </>
  )
}
