  /* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Search() {
  const [myProductList, setMyProductList] = useState([]);
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => {
        // console.log(res.data.products);
        // let prod = res.data.products;
        setMyProductList(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => {
        console.log(res);
        setMyProductList(res.data.products);
      })
      .catch((err) => console.log(err));
  }, [search]);
  // if dependency array contain value , then useeffect runs when the value is there, otherwise it will run on page loading.

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    setSearch(input);
  };
  return (
    <>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search here ..."
        onChange={handleChange}
        value={input}
      />
      <button onClick={handleClick}>Search</button>
      {/* <div className="container">
        {/* Array.isArray(data)&&data.map --->  used to wrap data into array */}
      {/* </div> */}
      {Array.isArray(myProductList) &&
        myProductList.map((v, i) => {
          return (
            <>
              <div className="container text-center" key={v.id}>
                <div
                  className="row"
                  style={{
                    //   height: "300px",
                    margin: "10px 10px",
                    border: "1px solid red",
                  }}
                >
                  {v.brand}
                  <div className="col">
                    <span>{v.category}</span>
                    <br />
                    <span>{v.availabilityStatus}</span>
                    <br />
                    <span>{v.price}</span>
                    <br />
                    <span>{v.rating}</span>
                    <br />
                    <span>{v.stock}</span>
                    <br />
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}
