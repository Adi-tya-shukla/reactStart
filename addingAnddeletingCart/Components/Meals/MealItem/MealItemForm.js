import React,{useRef,useState} from "react";

import './MealItemForm.css'
import Input from "../../Ui/Input";
const MealItemForm = props => {

    const[amountValid, setAmountValid]= useState(true)
    const amountRef = useRef()

    const submitHandler = event => {
        // console.log('submitted' +amountRef.current.value);
        event.preventDefault();
    const enteredAmountRef = amountRef.current.value;
    const enteredAmountNum = +enteredAmountRef;
    if (
        enteredAmountRef.trim().length === 0 ||
        enteredAmountNum < 1 ||
        enteredAmountNum > 5
      ) {
        setAmountValid(false);
        return;
      }
  props.onAddItem(enteredAmountNum);
  
    }
    return (
        <form className="form" onSubmit={submitHandler}>
            <Input ref={amountRef}
                label='Amount' input={{

                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '0',
                }} />
            <button type="submit">+Add</button>
            {!amountValid && <p>Enter valid Amount</p>}        
        </form>
    );
}

export default MealItemForm;