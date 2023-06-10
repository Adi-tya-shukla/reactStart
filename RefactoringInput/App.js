import React, { useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './Context/AuthContext';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
const ctx = useContext(AuthContext)

  // const loginHandler = (email, password, college) => {
       // We should of course check email and password
  // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  //   console.log(`${email}--${password}--${college}`);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
 
      <MainHeader 
      // isAuthenticated={isLoggedIn} 
      // onLogout={ctx.logoutHandler} 
      />
      <main>
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home />}
      </main>
      
     </React.Fragment> 
  );
}

export default App;
