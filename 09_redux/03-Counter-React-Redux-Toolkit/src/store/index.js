import { configureStore, createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterVal:0},
    reducers: {
        increment: (state, action)=>{

        },
        decrement: (state, action)=>{

        },
        add: (state, action)=>{

        },
        subtract: (state, action)=>{

        }
    }
    
})

const counterReducer = (store = INITIAL_VALUE, action) => {
    if (action.type === "INCREMENT") {
        return { ...store, counter: store.counter + 1 };
    }
    else if (action.type === "DECREMENT") {
        return { ...store, counter: store.counter - 1 };
    }
    else if (action.type === "ADD") {
        return { ...store, counter: store.counter + Number(action.payload) };
    }
    else if (action.type === "SUBTRACT") {
        return { ...store, counter: store.counter - Number(action.payload) };
    }
    else if (action.type === "PRIVACY_TOGGLE") {
        return { ...store, privacy: !store.privacy };
    }
    return store;
};

const counterStore = configureStore(
    {
        reducer: {
            counter: counterSlice.reducer
        },
    });
export default counterStore;