import React,{useState} from "react";
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Candies from "./Components/Inventory/Candies";
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
          <Candies/>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </CartProvider>
  );
}

export default App;