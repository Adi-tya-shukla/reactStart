import React from "react";
import './Header.css'
import bgImg from'../Assets/empty-pharmacy-store-flat-vector-46893546.jpg'
import HeaderCartButton from'./HeaderCartButton'

const Header=(props)=>{

    return (
        <React.Fragment>
          <header className="header">
            <h1>Welcome to m-PHARMA ...</h1>
            <HeaderCartButton onClick={props.onClick}>Cart</HeaderCartButton>
          </header>
          <div className='main-image'>
            <img src={bgImg} alt='Food items' />
          </div>
        </React.Fragment>
      );
    };
    
    export default Header;