import classes from './Counter.module.css';
import {
  useDispatch,
  useSelector } from 'react-redux';

import { counterActions } from '../Store/index';

const Counter = () => {
  const dispatch =    useDispatch();
  const counter = useSelector(state=> state.counter.counter);

  const increaseCounterHandler = () => {
   dispatch(counterActions.increment())
  };

  const decreaseCounterHandler =()=>{
    dispatch(counterActions.decrement())
  };
  const increaseBy2CounterHandler = () => {
    dispatch(counterActions.increase(2))
   };
 
   const decreaseBy2CounterHandler =()=>{
     dispatch(counterActions.decrease(2))
   };
 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={decreaseCounterHandler}>Decrease Counter</button>
      <button onClick={increaseCounterHandler}>Increase Counter</button>
      
      <button onClick={decreaseBy2CounterHandler}>Decrease Counter by 2</button>
      <button onClick={increaseBy2CounterHandler}>Increase Counter by 2</button>
    </main>
  );
  }
export default Counter;
