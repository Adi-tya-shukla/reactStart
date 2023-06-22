import React, { useState } from 'react';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import AddItem from './Components/OrderItem/AddItem';
import TableBill from './Components/Tables/TableBill';
import './App.css';

function App() {
  const [orders, setOrders] = useState([]);

  const orderTaken = (order) => {
    localStorage.setItem(order.id, JSON.stringify(order));
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  const onRemove = (orderId) => {
    localStorage.removeItem(orderId);
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <AddItem onAdd={orderTaken} />
        <TableBill orders={orders} onDelete={onRemove} />
      </div>
      <Footer />
    </div>
  );
}

export default App;