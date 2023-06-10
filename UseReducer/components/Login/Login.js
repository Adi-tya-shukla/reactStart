import React, { useEffect, useState ,useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { act } from 'react-dom/test-utils';

const emailReducer =(state, action)=>
{
  if(action.type === 'userEmail'){
return{
  value : action.val,
  isValid :action.val.includes('@')
};
  }
if(action.type=== "userBlur"){
  return{
    value : state.value,
    isValid: state.value.includes('@')
  };
}
return{
  val: '',
  isValid : false
}
}


const passwordReducer = (state, action)=>
{
if(action.type === 'userPass'){
  return{
    value : action.val,
    isValid : action.val.trim().length > 6
  };
}
if(action.type ==='passBlur'){
  return{
    value : state.value,
    isValid : state.value.trim().length > 6

  };
}
  return{
    val : '',
    isValid : false
  }
}
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredCollege, setEnteredCollege] = useState('');
  const [CollegeIsValid, setCollegeIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const[emailState, dispatchEmail] =useReducer(emailReducer,{value : '', isValid : null})
 const[passwordState, dispatchPass] = useReducer(passwordReducer,{value : '', isValid : null})
  // useEffect(()=>{

  //   const identifier = setTimeout(()=>{
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredCollege.trim().length >5
  //     );
  //   },500);

  //   return()=>{
  //     clearTimeout(identifier)
  // }
   
  // },[enteredCollege, enteredEmail,enteredPassword])
  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'userEmail' , val: event.target.value});

    setFormIsValid(
     event.target.value.includes('@') && passwordState.isValid  &&  enteredCollege.trim().length >5
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({type : 'userPass', val : event.target.value});

    setFormIsValid(
      event.target.value.trim().length > 6 &&  emailState.isValid && enteredCollege.trim().length >5
    );
  };

  const CollegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);

    setFormIsValid(
      emailState.isValid && passwordState.isValid  && event.target.value.trim().length >5
    );
  };

 

  const validateEmailHandler = () => {
   dispatchEmail({type : 'userBlur'})
  };

  const validatePasswordHandler = () => {
    dispatchPass({type : 'passBlur'})
  };
  const validateCollegeHandler = () => {
    setCollegeIsValid(enteredCollege.trim().length >5);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value, enteredCollege);
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
         CollegeIsValid === false ? classes.invalid : ''
          }`}
          >
        <label htmlFor="college">Enter college</label>
          <input
            type="college"
            id="college"
            value={enteredCollege}
            onChange={CollegeChangeHandler}
            onBlur={validateCollegeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
