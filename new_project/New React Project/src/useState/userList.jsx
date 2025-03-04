import React, { useState } from "react";

export default function UserList() {
  const [formData, setFormData] = useState({});
console.log(formData);
  const handleChange = (param) =>{
    setFormData((prev)=> ({...prev,[param.target.name]:param.target.value}));
  }
  const handleAdd = (e) => {

  };
  return (
    <>
      <form action="">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
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
            type="number"
            name="phone"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button onClick={handleAdd}>Add</button>
      </form>
    </>
  );
}
