import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "ag-grid-community";
import { ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const AgGrid = () => {
  const [rowData, setRowData] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Jack", age: 28 },
  ]);

  const handleDelete = (id) => {
    const filteredData = rowData.filter((row) => row.id !== id);
    setRowData(filteredData);
  };

  const handleEdit = (id) => {
    const newName = prompt("Enter new name:");
    if (newName) {
      const updatedData = rowData.map((row) =>
        row.id === id ? { ...row, name: newName } : row
      );
      setRowData(updatedData);
    }
  };

  const ActionButtons = (props) => {
    return (
      <div>
        <button
          onClick={() => handleEdit(props.data.id)}
          style={{
            marginRight: "5px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "5px",
            cursor: "pointer",
          }}
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(props.data.id)}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "5px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    );
  };

  const columnDefs = [
    { field: "id" },
    { field: "name" },
    { field: "age" },
    {
      headerName: "Actions",
      cellRenderer: (params) => <ActionButtons {...params} />,
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        rowModelType="clientSide"
      />
    </div>
  );
};

export default AgGrid;
