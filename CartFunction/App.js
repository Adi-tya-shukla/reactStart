import React,{useState} from "react";
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";



function App() {
const [cartIsShown, setCartShown] = useState(false)
const showCartHAndler=()=>{
setCartShown(true);
}
const hideCartHandle =()=>{
  setCartShown(false)
}

  return (
    <React.Fragment>
      <div className="app-container">
        {cartIsShown && <Cart onClose={hideCartHandle}/>}
        <Header onClick={showCartHAndler} />
        <main className="content">
          <Meals />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
