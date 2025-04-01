import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {state.counter += 1},
        decrement(state) {state.counter -= 1},
        increase(state, action) {state.counter += action.payload},
        decrease(state, action) {state.counter -= action.payload}
    }
})

const initialAuthState = {
    authentication: false,
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.authentication = true; 
            state.user = action.payload;
        },
        logout(state) {
            state.authentication = false; 
            state.user = null;
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;