import React from "react";
import './Header.css'
import bgImg from'../Assets/Candies.jpg'
import HeaderCartButton from'./HeaderCartButton'

const Header=(props)=>{

    return (
        <React.Fragment>
          <header className="header">
            <h1>Welcome to m-Candies ...</h1>
            <HeaderCartButton onClick={props.onClick}>Cart</HeaderCartButton>
          </header>
          <div className='main-image'>
            <img src={bgImg} alt='Candies' />
          </div>
        </React.Fragment>
      );
    };
    
    export default Header;