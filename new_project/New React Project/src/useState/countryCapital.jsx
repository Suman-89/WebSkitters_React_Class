import React, { useState } from 'react'

export default function CountryCapital() {
    const[capiTal,setCapiTal] = useState('');
    
    const handleChange = (param) =>{
        setCapiTal(param.target.value);
    }
  return (
    <>
      <h1>Country & Capital</h1>&nbsp;&nbsp;
    <select name="" id="color" onChange={handleChange}>
    <option value="">Select one</option>
        <option value="New Delhi">India</option>
        <option value="Beijing">China</option>
        <option value="Washington">USA</option>
        <option value="London">UK</option>
        <option value="Tokyo">Japan</option>
    </select>
    <h3>Capital = {capiTal}</h3>
    </>
  )
}
