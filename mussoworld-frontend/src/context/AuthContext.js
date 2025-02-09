import { createContext, useContext, useState } from "react";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

export default function AuthContext({ children }) {

    const [authenticated, setAuthenticated] = useState(false);


    function login(userid, password) {

        if (userid === "hyukjun" && password === "123") {
            setAuthenticated(true);
            return true
        }

        setAuthenticated(false);
        return false

    }

    function logout() {
        setAuthenticated(false);
    }

    return (
        <div>
            <authContext.Provider value={{ useAuth, login, authenticated, logout }}>
                {children}
            </authContext.Provider>
        </div>
    )

}