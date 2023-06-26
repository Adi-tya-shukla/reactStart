import React, { useContext } from "react";
import './MealItem.css'
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/Cart-Context"

const MealItem = props => {

   const ctx=  useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`

    const addToCart = amount => {
        // console.log(amount);
        //    console.log([props.id , props.name, amount, price]);
        ctx.addItem({
            id:    props.id,
            name:  props.name,
            amount: amount,
            price : props.price,
            
        });
    
    }
    return (
        <li className="meal">
            <div>
                <h3>{props.name}</h3>
                <div className="description">{props.description}</div>
                <div className="price">{price}</div>
            </div>
            <div>
                <MealItemForm onAddItem={addToCart} />
            </div>
        </li>
    );
}
export default MealItem;