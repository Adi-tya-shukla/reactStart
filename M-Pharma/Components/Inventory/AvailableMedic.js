import React, { useState } from 'react';
import './AvailableMedic.css';
import Card from '../UI/Card';
import InventoryItem from './InventoryItem/InventoryItem';
import ItemAdded from './ItemAdded';

const medicList = [];

const AvailableMedic = () => {
  const [medic, setMeals] = useState(medicList);

  const handleItemAdded = (newItem) => {
    setMeals((prevMedic) => [...prevMedic, newItem]);
  };
  
  const medicItems = medic.map((medic) => (
    <InventoryItem
      key={medic.id}
      id={medic.id}
      name={medic.name}
      description={medic.description}
      price={medic.price}
      quantity={medic.quantity} 
    />
  ));
  return (
    <>
      <ItemAdded onItemAdded={handleItemAdded} />
      <section className="medic">
        <Card>{medicItems}</Card>
      </section>
    </>
  );
};

export default AvailableMedic;
