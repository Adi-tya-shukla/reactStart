import React from "react";


const Table2 = (props) => {
  const deleteItem = (orderId) => {
    localStorage.removeItem(orderId);
    props.onRemove(orderId);
  };

  return (
    <div>
      <h2>Table 2 Order List</h2>
      {props.orders.length === 0 ? (
        <p>No orders for Table 2 placed yet.</p>
      ) : (
        <ul>
          {props.orders.map((order,index) => (
            <li key={order.id}>
              <strong>Order {index+1}:</strong> {order.dish} Amount: {order.amount}
              <button onClick={() => deleteItem(order.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Table2;