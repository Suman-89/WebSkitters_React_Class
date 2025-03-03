import React, { useState } from "react";

export default function UserList() {
  const [formData, setFormData] = useState({
    Name: "",
    Address: "",
    Phone: "",
  });

  const handleChange = (param) =>{
    param.target.value;

  }
  const handleAdd = (param) => {
    param.target.value;
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
          Age:
          <input
            type="number"
            name="age"
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
