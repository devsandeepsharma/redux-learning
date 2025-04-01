import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import { authActions } from "../store";

const Header = () => {

    const auth = useSelector(state => state.auth.authentication)
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authActions.logout());
    }

    return (
        <header>
            <p>Redux</p>
            {
                auth && 
                <ul>
                    <li><a href="/">My Products</a></li>
                    <li><a href="/">My Sales</a></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
            }
        </header>
    )
}

export default Header;