import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";


const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth,initializeUser);
    }, []);


    const initializeUser = (user) => {
        if(user) {
            setCurrentUser({...user});
            setUserLoggedIn(true);
            setIsLoading(false);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
            setIsLoading(false);
        }
    }


    const value = {
        currentUser,
        userLoggedIn,
        isLoading
    }

    return <AuthContext.Provider value={value}>{!isLoading && children}</AuthContext.Provider>
};


export { AuthContext, AuthContextProvider };