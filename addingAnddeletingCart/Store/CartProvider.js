import { useReducer } from "react"
import CartContext from "./Cart-Context"

const cartReducer=(state,action)=>{
    if(action.type === 'Add'){
     const updateAmount = state.totalAmount + action.item.price * action.item.amount;
     const existingItemIndex = state.items.findIndex(item=>item.id === action.item.id);

     const existingItem = state.items[existingItemIndex]
let updateItems; 

 if(existingItem){
    const updateItem  = {
        ...existingItem,
        amount :existingItem.amount+action.item.amount
    }
    updateItems =[...state.items];
    updateItems[existingItemIndex] =  updateItem;
 }else{
    updateItems = state.items.concat(action.item);
 } 

    //  const updateItem = state.items.concat(action.item);  
     return{
        items : updateItems,
        totalAmount : updateAmount
     }
    }
if(action.type ==='Remove'){
    const existingItemIndex = state.items.findIndex(item=>item.id === action.id);
    const existingItem = state.items[existingItemIndex]
    const updateAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
  
      return {
        items: updatedItems,
        totalAmount: updateAmount
      };
    }

return defaultCartState
}

const defaultCartState={
    items: [],
    totalAmount: 0,
}

const CartProvider=props=>{
   const [ cartState , cartDispatch]=  useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (items) => {
        cartDispatch({
            type : 'Add',
            item : items
        })
      };
    
      const removeItemFromCartHandler = (id) => {
        cartDispatch({
            type : 'Remove',
            id : id
        })
        
      };
    
      const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
      };

return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
);
}

export default CartProvider;