import React, { useEffect, useState } from "react";
import axios from "axios";
// import {baseUrl} from "../route/baseUrl";

export default function Index() {
  const [cointList, setCoinList] = useState([]);
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then((res) => {
        console.log(res.data.data);
        setCoinList(res.data.data);
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // console.log('Search -->',search);
    const delayTimer = setTimeout(() => {
      if (input) {
        const caseChange = input.toLowerCase();
        const filterList = cointList.filter(
          (fData) =>
            fData.name.toLowerCase().includes(caseChange) ||
            fData.rank.toLowerCase().includes(caseChange)
        );
        setList(filterList);
      } else {
        setList(cointList);
      }
    }, 500);

    return () => clearTimeout(delayTimer);
  }, [input, cointList]);

  return (
    <>
      <nav
        className="navbar sticky-top bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand">find your coin</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {/* <button classNameName="btn btn-outline-success" type="button" >
              Search
            </button> */}
          </form>
        </div>
      </nav>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SL. No.</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Rank</th>
              <th scope="col">Symbol</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(list) &&
              list.map((v, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.rank}</td>
                  <td>{v.symbol}</td>
                  <td>
                    <>
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Info
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Product details
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <ul className="list-group">
                                <li className="list-group-item"><strong>Name </strong>{v.name}</li>
                                <li className="list-group-item"><strong>changePercent24Hr </strong> {v.changePercent24Hr}</li>
                                <li className="list-group-item"><strong>explorer </strong>{v.explorer}</li>
                                <li className="list-group-item"><strong>id </strong> {v.id}</li>
                                <li className="list-group-item"><strong>marketCapUsd </strong> {v.marketCapUsd}</li>
                                <li className="list-group-item"><strong>maxSupply </strong> {v.maxSupply}</li>
                                <li className="list-group-item"><strong>priceUsd </strong> ${v.priceUsd}</li>
                                <li className="list-group-item"><strong>rank </strong> {v.rank}</li>
                                <li className="list-group-item"><strong>supply </strong> {v.supply}</li>
                                <li className="list-group-item"><strong>symbol </strong> {v.symbol}</li>
                                <li className="list-group-item"><strong>volumeUsd24Hr </strong>{v.volumeUsd24Hr}</li>
                                <li className="list-group-item"><strong>vwap24Hr </strong>{v.vwap24Hr}</li>
                                
                              </ul>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                              >
                                Ok
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
