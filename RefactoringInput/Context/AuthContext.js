import React, { useState, useEffect } from "react";

const AuthContext =  React.createContext({
    isLoggedIn:false,
    onLogout : ()=>{},
    onLogin : (email, password , college)=>{}
});

export  const AuthContextProvider =(props) =>{
    const [isLoggedIn , setIsLoggedIn] =useState(false)
  
    useEffect(()=>{
        const storeloginf = localStorage.getItem('isLoggedIn');
        if(storeloginf === '1'){
          setIsLoggedIn(true);
        }
},
[])
    const loginHandler=() =>{
        setIsLoggedIn(true)
        localStorage.setItem('isLoggedIn', '1');
        // console.log(`${email}--${password}--${college}`);
    }

    const logoutHandler =() =>{
        setIsLoggedIn(false)
        localStorage.removeItem('isLoggedIn');
    }
    return(
        <AuthContext.Provider 
        value = {{
            isLoggedIn : isLoggedIn,
            onLogout : logoutHandler,
            onLogin : loginHandler
        }}
        
        >{props.children}</AuthContext.Provider>
    )
}
export default AuthContext;