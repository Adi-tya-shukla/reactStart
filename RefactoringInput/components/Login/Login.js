import React, { useEffect, useState ,useReducer,useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
// import { act } from 'react-dom/test-utils';
import AuthContext from '../../Context/AuthContext';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'userEmail') {
    return {
      value: action.val,
      isValid: action.val.includes('@')
    };
  }
  if (action.type === "userBlur") {
    return {
      value: state.value,
      isValid: state.value.includes('@')
    };
  }
  return {
    val: '',
    isValid: false
  }
}


const passwordReducer = (state, action) => {
  if (action.type === 'userPass') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6
    };
  }
  if (action.type === 'passBlur') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6

    };
  }
  return {
    val: '',
    isValid: false
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

const ctx =useContext(AuthContext)

  const[emailState, dispatchEmail] =useReducer(emailReducer,{value : '', isValid : null})
 const[passwordState, dispatchPass] = useReducer(passwordReducer,{value : '', isValid : null})


 const{isValid : emailIsValid} = emailState
 const {isValid : passwordIsValid} = passwordState

 useEffect(()=>{

    const identifier = setTimeout(()=>{
      setFormIsValid(
       emailIsValid && passwordIsValid && enteredCollege.trim().length >5
      );
    },500);

    return()=>{
      clearTimeout(identifier)
  }
   
  },[enteredCollege, emailIsValid,passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'userEmail' , val: event.target.value});

    // setFormIsValid(
    //  event.target.value.includes('@') && passwordState.isValid  &&  enteredCollege.trim().length >5
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({type : 'userPass', val : event.target.value});

    // setFormIsValid(
    //   event.target.value.trim().length > 6 &&  emailState.isValid && enteredCollege.trim().length >5
    // );
  };

  const CollegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);

    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid  && event.target.value.trim().length >5
    // );
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
    ctx.onLogin(emailState.value, passwordState.value, enteredCollege);
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id='email' 
        label='E-Mail' 
        type='email' 
        isValid={emailIsValid} 
        value={emailState.value} 
        onChange={emailChangeHandler}
         onBlur={validateEmailHandler} />
        <Input 
        id='password'
         label='Password'
          type='password'
           isValid={passwordIsValid}
            value={passwordState.value} 
            onChange={passwordChangeHandler} 
            onBlur={validatePasswordHandler} />
        <Input type="college"
          id="college"
          label='collage'
          isValid={CollegeIsValid}
          value={enteredCollege}
          onChange={CollegeChangeHandler}
          onBlur={validateCollegeHandler} />

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
