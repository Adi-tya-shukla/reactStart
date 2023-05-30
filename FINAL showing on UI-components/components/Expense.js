import React from 'react';

import ExpenseItem from './ExpenseItem';
// import Card from './Card';
import './Expense.css';

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.items.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
          // location={item.location}
        />
      ))}
    </div>
  );
}

// const Expenses = (props) => {
//   return (
//     <div className="expenses">
//       <ExpenseItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//         location={props.items[0].location}
//       />
//       <ExpenseItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//         location={props.items[1].location}
//       />
//       <ExpenseItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//         location={props.items[2].location}
//       />
//       <ExpenseItem
//         title={props.items[3].title}
//         amount={props.items[3].amount}
//         date={props.items[3].date}
//         location={props.items[3].location}
//       />

//     </div>
//   );
// }

export default Expenses;