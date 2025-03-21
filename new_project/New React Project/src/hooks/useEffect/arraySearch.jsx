// create an array in ls , then fetch and filter data table
import React, { useEffect, useState } from "react";

export default function ArraySearch() {
  const [input, setInput] = useState({
    uname: "",
    email: "",
    address: ""
  });
  const [vdata, setVdata] = useState([]);
  // const [myList, setMyList] = useState([]);
  // console.log(myList);

  useEffect(() => {
    const list = localStorage.getItem("myData");
    if (list) {
      setVdata(JSON.parse(list));
    }
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    if (input.uname && input.email && input.address) {
      const entry = { id: Date.now(), ...input }
      const newData = [...vdata, entry];
      setVdata(newData)
      localStorage.setItem('myData', JSON.stringify(newData));
      setInput({ uname: "", email: "", address: "" })
    } else {
      window.alert('Please fill the form');
    }
  }


  return (
    <>
      <section>
        <div className="input-group">
          <span className="input-group-text">User details : </span>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={(e) => setInput({ ...input, uname: e.target.value })}
            value={input.uname}
          />
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            value={input.email}
          />
          <input
            type="text"
            placeholder="Address"
            className="form-control"
            onChange={(e) => setInput({ ...input, address: e.target.value })}
            value={input.address}
          />
          <button className="btn btn-primary" type="button" onClick={handleClick}>
            Save
          </button>
        </div>
      </section>
      {/* Table will show if data is present in local storage */}
      <section>
        <strong>My Table</strong><br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SL. no.</th>
              <th scope="col">User name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          {
            Array.isArray(vdata) && vdata.map((v,index) => {
             return (<tbody>
                <tr key={v.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{v.uname}</td>
                  <td>{v.email}</td>
                  <td>{v.address}</td>
                </tr>
              </tbody>)
            })
          }
        </table>

      </section>
    </>
  );
}
