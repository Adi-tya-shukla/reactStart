import React,{useState} from 'react';

import Expenses from './components/Expenses/Expense';
import TotalAmount from './components/Expenses/TotalAmount';
import NewExpense from './components/NewExpenses/NewExpense';
const dummy = [ {
  id: 'e1',
  title: 'Mall Shopping',
  amount: 15090,
  date: new Date(2021, 7, 14),
},
{ 
  id: 'e2', 
  title: 'New TV', 
  amount: 7997.50, 
  date: new Date(2021, 2, 12),
},
{
  id: 'e3',
  title: 'Food Night',
  amount: 2982,
  date: new Date(2022, 2, 28),
},
{
  id: 'e4',
  title: 'New Desk (Wooden)',
  amount: 450,
  date: new Date(2022, 5, 12),
},
{
  id: 'e5',
  title: 'Mobile',
  amount: 5900,
  date: new Date(2023, 5, 12),
},]
const App = () => {
  const [expenses, setExpenses] = useState(dummy);

  const onAddExpense = (expense) => {
    setExpenses((prevExpenses) => [expense,...prevExpenses]);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2><b><i><u>Expense Tracker</u></i></b></h2>
    <h2 >Total Amount: Rs. <TotalAmount expenses={expenses} /></h2> 
    <div><NewExpense onAddExpense ={onAddExpense}/></div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;