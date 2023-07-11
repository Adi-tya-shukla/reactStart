import React,{useContext} from "react";
import './Cart.css';
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-Context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    // console.log(cartCtx.totalAmount);
    
    // const total = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasITem = cartCtx.items.length > 0;

    const cartItemRemove = id=>{
        cartCtx.removeItem(id)
    }
    const cartItemAdd = item=>{
        cartCtx.addItem({...item , amount :1})
    }


    const cartItem = <ul className="cart-items">
        {cartCtx.items.map((item) => 
       <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
       onRemove={cartItemRemove.bind(null, item.id)} onAdd={cartItemAdd.bind(null, item)}/>
        )}
    </ul>;

    return (
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className="total">
                <span>Total amount</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className="actions">
                <button className="close" onClick={props.onClose}>Close</button>
                {hasITem && <button className="button">Order</button>}
            </div>
        </Modal>

    );
}
export default Cart;