import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css"

const HeaderCartButton = props=>{
    return <button className="button" onClick={props.onClick}>
        <span className="icon">
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">
            30rs
        </span>
    </button>

}

export default HeaderCartButton;