import React from "react";
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";


function App() {
  return (
    <React.Fragment>
      <div className="app-container">
        <Cart/>
        <Header />
        <main className="content">
          <Meals />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
