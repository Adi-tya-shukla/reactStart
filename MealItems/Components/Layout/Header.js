import React from "react";
import './Header.css'
import mealsImg from'../../Assets/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.avif'
import HeaderCartButton from'./HeaderCartButton'

const Header=(props)=>{

    return (
        <React.Fragment>
          <header className="header">
            <h1>Welcome to FoodMaster</h1>
            <HeaderCartButton>Cart</HeaderCartButton>
          </header>
          <div className='main-image'>
            <img src={mealsImg} alt='Food items' />
          </div>
        </React.Fragment>
      );
    };
    
    export default Header;