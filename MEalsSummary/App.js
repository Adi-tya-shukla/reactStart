import React from "react";
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Meals from "./Components/Meals/Meals";


function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
