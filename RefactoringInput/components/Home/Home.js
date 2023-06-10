import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
// import AuthContext from '../../Context/AuthContext';
const Home = (props) => {
  // const ctx = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
