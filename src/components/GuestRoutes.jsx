import { Navigate } from "react-router-dom";
import {useAuth} from "../helpers/useAuth";

export default function GuestRoutes({ children }) {
  const { userLoggedIn } = useAuth();
  return (
    <>
      {userLoggedIn && <Navigate to="/" replace={userLoggedIn} />}
      {!userLoggedIn && children}
    </>
  );
}
