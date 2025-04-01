import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {state.counter++},
        decrement(state) {state.counter--},
        increase(state, action) {state.counter + action.payload},
        decrease(state, action) {state.counter - action.payload}
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;