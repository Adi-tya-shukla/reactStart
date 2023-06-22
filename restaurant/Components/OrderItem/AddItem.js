import React, { useState } from "react";
import Table from "./Table";
import Button from "../UI/Button";
import "./AddItem.css";

const AddItem = (props) => {

  const [selectedTable, setSelectedTable] = useState("");
  const [dish, updateDish] = useState("");
  const [amount, updateAmount] = useState(0);
  const [formIsValid, setFormIsValid] = useState(false);

  const tableHandler = (table) => {
    setSelectedTable(table);
  };

  const setDish = (event) => {
    updateDish(event.target.value);
    setFormIsValid(event.target.value.trim().length >1 && amount > 0)
  };

  const setAmount = (event) => {
   updateAmount(event.target.value);
   setFormIsValid(dish.trim().length > 1 && event.target.value > 0)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      id: Math.random(),
      dish: dish,
      table: selectedTable,
      amount: amount,
    };
    props.onAdd(order);

    setSelectedTable("");
    updateDish("");
    updateAmount(0);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <Table onChange={tableHandler} />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="dish">
            Enter Dish
          </label>
          <input
            className="input"
            id="dish"
            type="text"
            value={dish}
            onChange={setDish}
            // required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="amount">
            Amount
          </label>
          <input
            className="input"
            id="amount"
            type="number"
            value={amount}
            onChange={setAmount}
            // required
          />
        </div>
        <div className="form-group">
          <Button
            className='button'
            type="submit"
            disabled={!formIsValid}

          >
            Add Item
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddItem;