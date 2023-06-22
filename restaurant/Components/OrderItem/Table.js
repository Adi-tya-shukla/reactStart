import React, { useState } from "react";
import './Table.css'

const Table = (props) => {
  const [selectedTable, setSelectedTable] = useState("");

  const tableValueChange = (event) => {
    const value = event.target.value;
    setSelectedTable(value);
    props.onChange(value);
    };

  return (
    <>
    <label className="label" htmlFor="table">
      Table no.
    </label>
    <select className="select" id="table" value={selectedTable} onChange={tableValueChange} required>
      <option value="" disabled hidden >
        Select a table
      </option>
      <option value="Table 1">Table 1</option>
      <option value="Table 2">Table 2</option>
      <option value="Table 3">Table 3</option>
    </select>
  </>
);
};

export default Table;