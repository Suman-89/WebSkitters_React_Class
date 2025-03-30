import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";

export default function Home() {
    
  const [rowData, setRowData] = useState([]);
  const [data, setData] = useState("");

  const columnDefs = [{ field: "name" }];
  const defaultColDef = {
    flex: 1,
  };

  // Handle the 'Save Item' button click to add a new item to the table and localStorage
  const handleClick = () => {
      // Add new data item to the rowData state
      const newRowData = [...rowData, { name: data }];
      
      // Update rowData state
      setRowData(newRowData);
      localStorage.setItem("item", JSON.stringify(newRowData));
      setData("");

  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("item");
    const parsedData = JSON.parse(savedData);
    setRowData(parsedData);
  }, []);

  return (
    <>
      <h2>My todo app</h2>
      <br />
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add (+)
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
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Item
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Modal Body start */}
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  Item:
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={handleChange}
                  value={data}
                />
              </div>
              {/* Modal Body end */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                data-bs-dismiss="modal"
              >
                Save Item
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div style={{ height: 200 }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          />
        </div>
      </div>
    </>
  );
}
