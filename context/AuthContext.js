import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

export const AuthContext = createContext();



export const AuthProvider = ({children}) => {
    
    const [isLoading, setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        CheckLoggingIn();
    },[])

    const CheckLoggingIn = async () => {
        try {
            const currentUser = await getCurrentUser();
            
            if (currentUser) {
                setIsLoggedIn(true);
                setUser(currentUser);
            } else {
                setIsLoggedIn(false);
                setUser(null);
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}