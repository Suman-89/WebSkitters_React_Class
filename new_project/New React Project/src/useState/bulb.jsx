import React, { useState } from "react";
import bulbOff from "../assets/images/pic_bulboff.gif";
import bulbOn from "../assets/images/pic_bulbon.gif";

export default function Bulb() {
    const [bulbon, setBulbon] = useState(bulbOff);
    const [btnName, setBtnName] = useState('Switch On');

    const lightState = () =>{
        if(bulbon == bulbOff) {
            setBulbon(bulbOn);
            setBtnName('Switch Off');
        }
        else {
            setBulbon(bulbOff)
            setBtnName('Switch On');
        }
    }

  return (
    <>
      <div className="container">
        {/* <button onClick={lightStateOn}>Turn on</button> */}
        <img src={bulbon} alt="" />&nbsp;
        <button onClick={lightState}>{btnName}</button>
      </div>
    </>
  );
}
