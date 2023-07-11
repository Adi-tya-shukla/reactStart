import React, { useContext, useState } from "react";
import "./InventoryItem.css";
import InventoryItemForm from "./InventoryItemForm";
import CartContext from "../../../Store/Cart-Context";

const InventoryItem = (props) => {
  const ctx = useContext(CartContext);
  let quantitY  = props.quantity

  const[quantity , setQuantity]=useState(quantitY);

  const addToCart = (amount, availableQuantity) => {
    if (amount > availableQuantity) {
      amount = availableQuantity;
    }
  
    setQuantity(quantity - amount);
  
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      quantity: availableQuantity,
      price: props.price,
      description: props.description,
    });
  };

  return (
    <li className="medicn">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">Rs : {props.price}</div>
        <div className="quantity">Total quantity Available: {quantity}</div>
      </div>
      <div>
      <InventoryItemForm limit={quantity} onAddItem={(amount) => addToCart(amount, quantity)} />
      </div>
    </li>
  );
};

export default InventoryItem;
