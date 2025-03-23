import React, { useEffect, useState } from "react";
import NoteContext from "./context";
import axios from "axios";

export default function Parent(item) {
  // let user = {
  //     uname:'Suman',
  //     address:'Kolkata',
  //     phone:'9874122365'
  // }

  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  },[]);

  return (
    <>
      {/* Provider is in-build function to wrap the children under the parent component */}
      
      <NoteContext.Provider value={data}>{item.children}</NoteContext.Provider>
    </>
  );
}
