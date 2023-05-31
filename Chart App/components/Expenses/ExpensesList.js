import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    let expensesContent = props.items.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ));

    if (props.items.length === 0) {

        return <p className="expenses-list__fallback">No expenses found.</p>;
    }
    else if (props.items.length === 1) {
        return(
        <>
            <p className="expenses-list__fallback">Only single Expense here. Please add more..</p>;
            {expensesContent}
        </>

        )
    }
    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    )
}

export default ExpensesList;