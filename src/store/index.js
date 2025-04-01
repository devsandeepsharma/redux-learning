import { createStore } from "redux";

const counterReducer = (store = { counter: 0 }, action) => {
    if(action.type === "increment") {
        return {
            counter: store.counter + 1,
        }
    }

    if(action.type === "decrement") {
        return {
            counter: store.counter - 1,
        }
    }

    if(action.type === "IncrementBy5") {
        return {
            counter: store.counter + 5,
        }
    }

    if(action.type === "Decremenenby5") {
        return {
            counter: store.counter - 5,
        }
    }

    return store;
}

const store = createStore(counterReducer);

export default store;