import React from "react";
import './Cart.css';
import Modal from "../Ui/Modal";
const Cart = (props) => {
    const cartItem = <ul className="cart-items">
       { [{
            id: 'm1',
        name: 'Rajma Chawal',
        price: 22.99,
    }].map(item=><li>{item.name}</li>)}
    </ul>;

    return (
        <Modal>
            {cartItem}
            <div className="total">
                <span>Total amount</span>
                <span>35.68</span>
            </div>
            <div className="actions">
                <button className="close">Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>

    );
}
export default Cart;