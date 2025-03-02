import React, { useState } from 'react'

export default function Color() {
    const[itemColor, setItemColor] = useState('');
    const handleChange = (param) =>{
        setItemColor(param.target.value);
    }
   
  return (
    <>
    <h1>Select Color</h1>&nbsp;&nbsp;
    <div className="box" style={{width:'100px' ,height:'100px',backgroundColor:itemColor}}></div>&nbsp;&nbsp;
    <select name="" id="color" onChange={handleChange}>
    <option value="">Select one</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="violet">Violet</option>
    </select>
    </>
  )
}
