import React from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // const[amount, setAmount] = useState(props.amount);

  // const clickHandler=()=>{
  //   setAmount('100');
  //   console.log(amount);
  // }

  return (
    <li>
      <div className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          {/* <div className='expense-item__Location'>{props.location}</div> */}
          <div className='expense-item__price'>Rs.{props.amount}/-</div>
        </div>
        {/* <button onClick={clickHandler}>ChangeAmount</button> */}
        <button onClick={() => {
          const parentElement = document.querySelector('.expense-item');
          parentElement.remove();
        }}>
          Delete
        </button>
      </div>
    </li>

  );
}

export default ExpenseItem;