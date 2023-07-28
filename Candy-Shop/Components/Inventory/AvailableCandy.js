import React, { useState } from 'react';
import './AvailableCandy .css'
import Card from '../UI/Card';
import InventoryItem from './InventoryItem/InventoryItem';
import ItemAdded from './CandyAdded';

const CandyList = [];

const AvailableCandy = () => {
  const [Candy, setCandy] = useState(CandyList);

  const handleItemAdded = (newItem) => {
    setCandy((prevCandy) => [...prevCandy, newItem]);
  };
  
  const CandyItems = Candy.map((Candy) => (
    <InventoryItem
      key={Candy.id}
      id={Candy.id}
      name={Candy.name}
      description={Candy.description}
      price={Candy.price}
      quantity={Candy.quantity} 
    />
  ));
  return (
    <>
      <ItemAdded onItemAdded={handleItemAdded} />
      <section className="Candy">
        <Card>{CandyItems}</Card>
      </section>
    </>
  );
};

export default AvailableCandy;