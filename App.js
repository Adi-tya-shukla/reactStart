import React from 'react';

import Expenses from './components/Expense';
import TotalAmount from './components/TotalAmount';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'MallShopping',
      amount: 15090,
      date: new Date(2020, 7, 14),
      location : 'Delhi'
    },
    { id: 'e2', 
     title: 'New TV', 
     amount: 7997.50, 
     date: new Date(2021, 2, 12) ,
     location:'Indrapuri'
    },
    {
      id: 'e3',
      title: 'FoodNight',
      amount: 2982,
      date: new Date(2021, 2, 28),
      location : 'Saket Nagar'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location : 'Saket Nagar'
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Expense Tracker</h2>
      <h3>Total Amount :$<TotalAmount expenses={expenses} /></h3>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;