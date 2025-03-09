// import React, { useState } from "react";

// export default function UserList() {
//   // const [formData, setFormData] = useState({ uname: '', email: '', phone: '' });
//   // const [viewData, setViewData] = useState([]);
//   const [name, setName] = useState("");
//   const [nameList, setNameList] = useState([]);
//   const handleChange = (param) => {
//     setName((prev) => ({ ...prev, [param.target.name]: param.target.value }));
//   }
//   // setViewData([formData])
//   // viewData.push(formData);
//   // console.log(viewData);

//   // 
//   const handleSave = () => {
//     if (name.trim()) {
//       const newEntry = { id: Date.now(), name };
//       const updatedList = [...nameList, newEntry];

//       setNameList(updatedList);
//       localStorage.setItem("names", JSON.stringify(updatedList));
//       setName("");
//     } else {
//       alert("Please enter a name.");
//     }
//   };
//   return (
//     <>
//       <form action="">
//         <label>
//           Name:
//           <input
//             type="text"
//             name="uname"
//             value={name.uname}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={name.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Phone:
//           <input
//             type="text"
//             name="phone"
//             value={name.phone}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <button onClick={(e) => handleSave(e)}>Add</button>
//         {nameList.map((v, i) => {
//           return (<ul key={i}>
//             <li><div className="card" style={{ border: '1px solid blue', width: '250px', height: '150px' }}>
//               <h3>{v.uname}</h3><br />
//               <span>{v.email}</span><br />
//               <span>{v.phone}</span>
//             </div></li>
//           </ul>)
//         })}
//       </form>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";

export default function UserList() {
  const [name, setName] = useState({ uname: "", email: "", phone: "" });
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    const storedNames = localStorage.getItem("names");
    if (storedNames) {
      setNameList(JSON.parse(storedNames));
    }
  }, []);

  const handleChange = (event) => {
    setName((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSave = (event) => {
    event.preventDefault();

    if (!name.uname.trim() || !name.email.trim() || !name.phone.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const newEntry = { id: Date.now(), ...name };
    const updatedList = [...nameList, newEntry];

    setNameList(updatedList);
    localStorage.setItem("names", JSON.stringify(updatedList));

    setName({ uname: "", email: "", phone: "" });
  };

  return (
    <>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="uname"
            value={name.uname}
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
            value={name.email}
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
            value={name.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" onClick={handleSave}>
          Add
        </button>
      </form>

      <ul>
        {nameList.map((v) => (
          <li key={v.id}>
            <div
              className="card"
              style={{
                border: "1px solid blue",
                width: "250px",
                height: "150px",
                padding: "10px",
              }}
            >
              <h3>{v.uname}</h3>
              <span>{v.email}</span>
              <br />
              <span>{v.phone}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}