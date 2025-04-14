// create an array in ls , then fetch and filter data table
import React, { useEffect, useState } from "react";

export default function ArraySearch() {
  const [input, setInput] = useState({
    uname: "",
    email: "",
    address: ""
  });
  const [vdata, setVdata] = useState([]);
  const [view, setView] = useState({ user: '', mail: '', address: '' });
  // const [myList, setMyList] = useState([]);
  console.log(view, "view");

  useEffect(() => {
    const list = localStorage.getItem("myData");
    if (list) {
      const userList = JSON.parse(list);
      setVdata(userList);
      userList.map(v=>setView(v));
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

  const viewData = (view) => {
    console.log(view, 'view');
  }

  const editData = (eData) => {
    // console.log(eData,"edit");
  }

  const deleteData = (dData) => {
    // console.log(dData,"delete");
    const newData = vdata.filter((d) => d !== dData)
    setVdata(newData);
    localStorage.setItem('myData', JSON.stringify(newData));
  }


  return (
    <>
      <h1>My List</h1>
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
      {Array.isArray(vdata) && vdata ? (<>
        <section>
          <strong>My Table</strong><br />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">SL. no.</th>
                <th scope="col">User name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {
              Array.isArray(vdata) && vdata.map((v, index) => {
                return (
                  <tbody key={v.id}>
                    <tr onClick={() => viewData(v)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <th scope="row">{index + 1}</th>
                      <td>{v.uname}</td>
                      <td>{v.email}</td>
                      <td>{v.address}</td>
                      <td>
                        <button type="button" className="btn btn-outline-danger" onClick={() => deleteData(v)}>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                )
              })
            }
          </table>
        </section>
        {/* Modal element */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">User</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="input-group">
                  {/* <span className="input-group-text">First and last name</span> */}
                  <input type="text" placeholder="Name" aria-label="Username" className="form-control" onChange={(e) => setView({ ...view, user: e.target.value })} value={view.user} />
                  <input type="text" placeholder="Email" aria-label="Email" className="form-control" onChange={(e) => setView({ ...view, mail: e.target.value })} value={view.mail} />
                  <input type="text" placeholder="Place" aria-label="Place" className="form-control" onChange={(e) => setView({ ...view, address: e.target.value })} value={view.address} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </>) : (<></>)}
    </>
  );
}
