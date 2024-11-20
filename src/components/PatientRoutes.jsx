import { Navigate } from "react-router-dom";
import {useAuth} from "../helpers/useAuth";

export default function PatientRoutes({ children }) {
    const { currentUser } = useAuth();
    return (
        <>
            {currentUser && currentUser.role === "BS" ? children : <Navigate to="/" replace={true} />}
        </>
    );
}