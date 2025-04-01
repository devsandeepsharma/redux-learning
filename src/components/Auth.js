import { useState } from "react";
import { useDispatch } from "react-redux";

import { authActions } from "../store";

import "./auth.css";

const Auth = () => {

    const dispatch = useDispatch()

    const [user, setUser] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        dispatch(authActions.login(user));
        setUser("");
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text" 
                placeholder="Enter Your Name" 
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default Auth;