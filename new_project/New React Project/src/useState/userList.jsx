import React, { useState } from "react";

export default function UserList() {
  const [formData, setFormData] = useState({ uname: '', email: '', phone: '' });
  const [viewData, setViewData] = useState([]);

  const handleChange = (param) => {
    setFormData((prev) => ({ ...prev, [param.target.name]: param.target.value }));
  }
  // setViewData([formData])
  // viewData.push(formData);
  // console.log(viewData);

  const handleAdd = (e) => {
    e.preventDefault();

    let arr = [];
    arr.push(formData);
    localStorage.setItem('setData', JSON.stringify(arr));
    const userData = JSON.parse(localStorage.getItem('setData'));
    setViewData(userData);
    // setFormData((prev) => ({ ...prev, [param.target.name]: '' }));

    // setFormData();
  };
  return (
    <>
      <form action="">
        <label>
          Name:
          <input
            type="text"
            name="uname"
            value={formData.uname}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button onClick={(e) => handleAdd(e)}>Add</button>
        {viewData.map((v, i) => {
          return (<ul key={i}>
            <li><div className="card" style={{ border: '1px solid blue', width: '250px', height: '150px' }}>
              <h3>{v.uname}</h3><br />
              <span>{v.email}</span><br />
              <span>{v.phone}</span>
            </div></li>
          </ul>)
        })}
      </form>
    </>
  );
}
