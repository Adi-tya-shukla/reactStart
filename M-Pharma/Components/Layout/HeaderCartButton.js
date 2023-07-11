import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css"
import CartContext from "../../Store/Cart-Context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = props => {

    const [btnHighlighted, setBtnHighlighted] = useState(false);
    const ctx = useContext(CartContext)

    const { items } = ctx

    const noOfItem = items.reduce((currNum, item) => {
        return currNum + item.amount;
    }, 0);


    const btnClass = `button ${btnHighlighted ? 'bump' : ''} `
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighlighted(true)
        const timer = setTimeout(() => {
            setBtnHighlighted(false)
        }, 300)
        return () => {
            clearTimeout(timer)
        }

    }, [items])

    return <button className={btnClass} onClick={props.onClick}>
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