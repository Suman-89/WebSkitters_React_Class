// create an array in ls , then fetch and filter data table
import React, { useState } from "react";

export default function ArraySearch() {
  const [input, setInput] = useState({
    uname: "",
    email: "",
    address: "",
  });
  const [vdata, setVdata] = useState([]);

  const handleClick = () =>{
  console.log("ip = ", input);
  setVdata(p => ({...p,...input}))

  }
  console.log('vdata = ',typeof vdata)
  console.log('vdata = ',vdata)


  return (
    <>
      <section>
        <div className="input-group">
          <span className="input-group-text">User details : </span>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={(e) => setInput({...input, uname: e.target.value})}
            value={input.uname}
          />
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setInput({...input, email: e.target.value})}
            value={input.email}
          />
          <input
            type="text"
            placeholder="Address"
            className="form-control"
            onChange={(e) => setInput({...input, address: e.target.value})}
            value={input.address}
          />
          <button className="btn btn-primary" type="button" onClick={handleClick}>
            Save
          </button>
        </div>
      </section>
      {/* Table will show if data is present in local storage */}
      <section>
        <strong>My Table</strong>
      </section>
    </>
  );
}
