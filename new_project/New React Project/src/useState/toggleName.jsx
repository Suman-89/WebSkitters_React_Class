/* eslint-disable no-unused-vars */
import React, { useState } from "react"; 

export default function ToggleName() {

  const [username, setUsername] = useState("Nill");
  const [colorStyle,setColorStyle] = useState({
    color : 'blue',
    border : '1px solid blue',
    borderRadius:'3px',
    background:'yellow'
  })

  const ToggleName = () => {
    console.log(username);
    if(username=='Nill') {
      setUsername('Pronoy');
      setColorStyle({color : 'yellow',
        border : '1px solid yellow',
        borderRadius:'3px',
        background:'green'
      })
    } 
    else {
      setUsername('Nill');
      setColorStyle({color : 'blue',
        border : '1px solid blue',
        borderRadius:'3px',
        background:'yellow'
      })
    }
  }
  return (
    <>
      <div className="outerbox">
        <h2>Toggle name Project</h2>
        <div className="username">
          <h4 style={colorStyle}>{username}</h4>
        </div>&nbsp;&nbsp;
        <div className="button">
          <button
            type="button" 
            onClick={ToggleName}
            style={colorStyle}
          >
            Toggle Name
          </button>
        </div>
      </div>
    </>
  );
}
