import { configureStore, createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterVal:0},
    reducers: {
        increment: (state)=>{
            state.counterVal++;
        },
        decrement: (state)=>{
            state.counterVal--;
        },
        add: (state, action)=>{
            state.counterVal += Number(action.payload);
        },
        subtract: (state, action)=>{
            state.counterVal -= Number(action.payload);
        }
    }
    
});

const privacySlice = createSlice({
    name: 'privacy',
    initialState: false,
    reducers: {
        privacyToggle: (state) => {
            return state = !state;
        }
    }
});


const counterStore = configureStore(
    {
        reducer: {
            counter: counterSlice.reducer,
            privacy: privacySlice.reducer
        },
    });

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;

export default counterStore;

/*const counterReducer = (store = INITIAL_VALUE, action) => {
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
*/