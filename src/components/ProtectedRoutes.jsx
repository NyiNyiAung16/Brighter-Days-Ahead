import { Navigate } from "react-router-dom";
import {useAuth} from "../helpers/useAuth";

export default function ProtectedRoutes({ children }) {
  const { userLoggedIn } = useAuth();

  return (
    <>
      {!userLoggedIn && <Navigate to="/login" replace={!userLoggedIn} />}
      {userLoggedIn && children}
    </>
  );
}
