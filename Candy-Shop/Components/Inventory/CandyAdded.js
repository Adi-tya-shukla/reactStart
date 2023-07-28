import React, { useState } from 'react';
import './CandyAdded.css';

const CandyAdded = (props) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random(),
      name: itemName,
      price: itemPrice,
      quantity: itemQuantity,
      description: itemDescription
    };

    props.onItemAdded(newItem);
    setItemName('');
    setItemPrice('');
    setItemQuantity('');
    setItemDescription('');
  };

  const isFormValid =
    itemName.trim() !== '' &&
    itemPrice.trim() !== '' &&
    itemQuantity.trim() !== '' &&
    itemDescription.trim() !== '';

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="itemName">Item Name</label>
      <input
        type="text"
        id="itemName"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      <label htmlFor="itemPrice">Item Price</label>
      <input
        type="number"
        id="itemPrice"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
      />

      <label htmlFor="itemQuantity">Item Quantity</label>
      <input
        type="number"
        id="itemQuantity"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
      />

      <label htmlFor="itemDescription">Item Description</label>
      <textarea
        id="itemDescription"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
      ></textarea>

      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default CandyAdded;