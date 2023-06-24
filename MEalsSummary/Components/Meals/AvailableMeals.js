import React from "react";
import './AvailableMeals.css';

const MealsList = [
    {
      id: 'm1',
      name: 'Rajma Chawal',
      description: 'Finest rice served with Smooky flavoured Rajma',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Biryani',
      description: 'Rice mixed with veggies and paneer served with raita',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Chhole kulche',
      description: 'butter Kulcha served with nicely cooked Chhole ',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Saled saled green saled',
      price: 18.99,
    },
  ];

const AvailableMeals = () =>{
const meals = MealsList.map(meal=><li>{meal.name }</li>)
    return(
        <section className="meals">
            {meals}
        </section>
    );
}

export default AvailableMeals;