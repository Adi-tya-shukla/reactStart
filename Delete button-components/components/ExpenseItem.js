import React from 'react';

import ExpenseDate from './ExpenseDate';
// import Card from './Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
  <ExpenseDate date={props.date} />
  <div className='expense-item__description'>
    <h2>{props.title}</h2>
    <div className='expense-item__Location'>{props.location}</div>
    <div className='expense-item__price'>Rs.{props.amount}/-</div>
  </div>
  <button onClick={() => {
    const parentElement = document.querySelector('.expense-item');
    parentElement.remove();
  }}>
    Delete
  </button>
</div>
  );
}

export default ExpenseItem;