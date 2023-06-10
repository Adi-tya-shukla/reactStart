import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './Context/AuthContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
          const storeloginf = localStorage.getItem('isLoggedIn');
          if(storeloginf === '1'){
            setIsLoggedIn(true);
          }
  },
  [])

  const loginHandler = (email, password, college) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
    console.log(`${email}--${password}--${college}`);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    // <React.Fragment>
      <AuthContext.Provider
      value={
        {
          isLoggedIn:isLoggedIn
      }
      }>
      <MainHeader 
      // isAuthenticated={isLoggedIn} 
      onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>

      </AuthContext.Provider>
      
    /* </React.Fragment> */
  );
}

export default App;
