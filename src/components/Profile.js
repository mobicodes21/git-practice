import { useContext } from "react";
import { userContext } from "../context/UserContext";

function Profile(){
    const {user} = useContext(userContext);
    return<h1>salam {user}</h1>
}

export default Profile;