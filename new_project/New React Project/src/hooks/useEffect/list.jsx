import axios from "axios";
import React, { useEffect, useState } from "react";

export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);

  //   console.log('data-->',data.data);
  return (
    <>
      <div className="container">
        {/* Array.isArray(data)&&data.map --->  used to wrap data into array */}
        {data.map((v) => {
          // console.log('v-->',v)
          return (
            <ul key={v.id}>
              <li>
                <div
                  style={{
                    width: "400px",
                    height: "100px",
                    margin: "10px 10px",
                    border: "1px solid red",
                  }}
                >
                  <h3>{v.name}</h3>&nbsp;
                  <span>{v.username}</span>&nbsp;
                  <span>{v.email}</span>&nbsp;
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
