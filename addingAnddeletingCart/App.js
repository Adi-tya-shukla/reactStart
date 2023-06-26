import React,{useState} from "react";
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";



function App() {
const [cartIsShown, setCartShown] = useState(false)

const showCartHAndler=()=>{
setCartShown(true);
}
const hideCartHandle =()=>{
  setCartShown(false)
}

  return (
    <CartProvider>
      <div className="app-container">
        {cartIsShown && <Cart onClose={hideCartHandle}/>}
        <Header onClick={showCartHAndler} />
        <main className="content">
          <Meals />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
