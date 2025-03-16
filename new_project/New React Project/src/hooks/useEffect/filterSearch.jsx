import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FilterSearch() {
  const [data, setData] = useState([]);
  const [dataInput, setDataInput] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => {
        // console.log("DATA--> ", res.data.products);
        setData(res.data.products);
        setDataInput(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  //   const showData = () => {};

  const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log('e ---> ',e.target.value);
  };

  useEffect(() => {
    // console.log('Search -->',search);
    const delayTimer = setTimeout(()=>{
      if (search) {
        const caseChange = search.toLowerCase();
        const filterList = data.filter(
          (fData) =>
            fData.brand.toLowerCase().includes(caseChange) ||
            fData.category.toLowerCase().includes(caseChange)
        );
        setDataInput(filterList);
      } else {
        setDataInput(data);
      }
    },500);

    return () => clearTimeout(delayTimer);
  }, [search, data]);

  const handleClick = () => {
    // console.log('Search -->',search);
  };

  console.log("Search-->", dataInput);

  return (
    <>
      <h2>Search by filter method</h2>
      <br />
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search here..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={search}
          onChange={handleChange}
        />
        <button
          className="btn btn-info"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product id</th>
              <th scope="col">Image</th>
              <th scope="col">Brand</th>
              <th scope="col">Category</th>
              <th scope="col">Availability</th>
              <th scope="col">Price</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            {
              dataInput.map((v) => {
                return (
                  <tr key={v.id}>
                    <th scope="row">{v.id}</th>
                    <td>
                      {v.images.map((v) => (
                        <img
                          key={v.id}
                          src={v}
                          style={{ width: "20px", height: "20px" }}
                        ></img>
                      ))}
                    </td>
                    <td>{v.brand}</td>
                    <td>{v.category}</td>
                    <td>{v.availabilityStatus}</td>
                    <td>${v.price}</td>
                    <td>{v.rating}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
