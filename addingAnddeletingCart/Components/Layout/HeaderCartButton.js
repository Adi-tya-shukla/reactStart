import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css"
import CartContext from "../../Store/Cart-Context";
import { useContext } from "react";

const HeaderCartButton = props=>{
   const ctx= useContext(CartContext)

   const noOfItem = ctx.items.reduce((currNum, item)=>{
    return currNum + item.amount;
   },0);
   
    return <button className="button" onClick={props.onClick}>
        <span className="icon">
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">
            {noOfItem}
        </span>
    </button>

}

export default HeaderCartButton;