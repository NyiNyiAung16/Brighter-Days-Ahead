import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export function useAuth() {
  const { currentUser, userLoggedIn, isLoading } = useContext(AuthContext);

  return { currentUser, userLoggedIn, isLoading };
}

export function useUser() {
  const { currentUser } = useAuth();
  let user;
  if (currentUser) {
    user = {
      id: currentUser.uid,
      name: currentUser.username,
      email: currentUser.email,
      role: currentUser.role,
    };
  }

  return user;
}
