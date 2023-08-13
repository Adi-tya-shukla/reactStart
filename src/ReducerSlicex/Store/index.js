import { createSlice,configureStore } from '@reduxjs/toolkit';

const initialState = { counter :0}

const authInitial = { isAuthenticated : false}

const authSlice = createSlice({
name : 'authentication',
initialState : authInitial,
reducers:{
    logInMethod(state){
        state.isAuthenticated = true
    },
    logOutMethod(state){
state.isAuthenticated = false;
    }
}

}) 

const counterSlice = createSlice({
    name : 'counter',
    initialState : initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        },
        decrease(state, action){
            state.counter = state.counter - action.payload;
        },
    }

})


const store = configureStore({
    reducer : {
        counter : counterSlice.reducer,
        auth : authSlice.reducer 
    },
 });
 
 export const authActions = authSlice.actions;
 export const counterActions =  counterSlice.actions; 
 export default store;
 
 

// const counterReducer = (state = {counter : 0}, action) =>{
//     if(action.type ==='increment'){
//         return{
//             counter : state.counter + action.amount,
//         }
//     }
//     if(action.type ==='decrement'){
//         return {
//             counter : state.counter - action.amount,
//         }
//     }
//     if(action.type ==='incrementBy2'){
//         return{
//             counter : state.counter + action.amount,
//         }
//     }
//     if(action.type ==='decrementBy2'){
//         return {
//             counter : state.counter - action.amount,
//         }
//     }
//     return state;

// }
 