import { useSelector } from "react-redux";
import "./profile.css";

const Profile = () => {

    const user = useSelector(state => state.auth.user)
    return (
        <div className="profile">
            <h1>Hello {user} 👋 </h1>
        </div>
    )
}

export default Profile;