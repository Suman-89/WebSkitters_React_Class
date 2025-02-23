/* eslint-disable no-unused-vars */
import React, { useState } from "react"; 

export default function ToggleName() {

  let myStyle = {
    color : 'red',
    border : '1px solid red'
  }

  const [username, setUsername] = useState("Nill");

  const ToggleName = () => {
    console.log(username);
    if(username=='Nill') setUsername('Pronoy');
    else setUsername('Nill');
  }
  return (
    <>
      <div className="outerbox">
        <h1>Toggle name Project</h1>
        <div className="username">
          <h3><span>Name = </span>{username}</h3>
        </div>
        <div className="button">
          <button
            type="button" 
            onClick={ToggleName}
            style={myStyle}
          >
            Toggle Name
          </button>
        </div>
      </div>
    </>
  );
}
