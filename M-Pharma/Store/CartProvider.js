import { useReducer } from "react";
import CartContext from "./Cart-Context";

const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const updateAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);

    const existingItem = state.items[existingItemIndex];
    let updatedItems;
     
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updateAmount,
    };
  }

  if (action.type === "Remove") {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[existingItemIndex];
    const updateAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updateAmount,
    };
  }

  return state;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
  quantity: 0,
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = (item) => {
    const availableQuantity = item.quantity; // Assuming the available quantity is provided in the item object
    const cartItem = cartState.items.find((cartItem) => cartItem.id === item.id);
  
    if (cartItem) {
      const updatedQuantity = cartItem.amount + item.amount;
      if (updatedQuantity > availableQuantity) {
        item.amount = availableQuantity - cartItem.amount;
      }
    } else {
      if (item.amount > availableQuantity) {
        item.amount = availableQuantity;
      }
    }
  
    cartDispatch({
      type: "Add",
      item: item,
    });
  };
  
  const removeItemFromCartHandler = (id) => {
    cartDispatch({
      type: "Remove",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    quantity: cartState.quantity,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
