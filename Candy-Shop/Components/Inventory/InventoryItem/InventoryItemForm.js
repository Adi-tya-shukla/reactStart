import React, { useRef, useState } from "react";
import "./InventoryItemForm.css";
import Input from "../../UI/Input";

const InventoryItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountRef = useRef();
const maxLimit = props.limit;

if(maxLimit <= 1){
    return(
      <button className="stockBtn" disabled>
      Out Of Stock
    </button>
    );
}
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmountRef = amountRef.current.value;
    const enteredAmountNum = +enteredAmountRef;
    if (
      enteredAmountRef.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > maxLimit
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddItem(enteredAmountNum);
 
  };

  return (
    <form className="form-cart" onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: maxLimit,
          step: "1",
          defaultValue: "0",
        }}
      />
      <button type="submit">+Add</button>
      {!amountValid && <p>Enter valid Amount</p>}
    </form>
  );
};

export default InventoryItemForm;