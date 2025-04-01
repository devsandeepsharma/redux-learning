import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../store";
import "./counter.css";

const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter)

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    }

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    }

    const handleIncrementBy5 = () => {
        dispatch(counterActions.increase(5));
    }

    const handleDecrementBy5 = () => {
        dispatch(counterActions.decrease(5));
    }

    return (
        <div className="card">
            <h1>Counter App</h1>
            <p className="text">{counter}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrementBy5}>Increment by 5</button>
            <button onClick={handleDecrementBy5}>Decrement by 5</button>
        </div>
    )
}

export default Counter;