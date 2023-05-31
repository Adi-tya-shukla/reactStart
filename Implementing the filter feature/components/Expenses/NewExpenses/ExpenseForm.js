import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date)
    };
    // console.log(expenseData);
  props.onSaveData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
           type='number'
           min='0.01'
           step='0.01'
           value={amount}
           onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2024-12-31'
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;