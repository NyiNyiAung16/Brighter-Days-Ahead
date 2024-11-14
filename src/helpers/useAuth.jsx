import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export default function useAuth() {
    const { currentUser, userLoggedIn, isLoading } = useContext(AuthContext);

    return { currentUser, userLoggedIn, isLoading };
}
