import {createContext, useContext, useState} from "react";
import {loginApiRequest} from "../api_service/DevtoonApiService.js";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    async function login(email, password) {
        const response = await loginApiRequest(email, password)

        if (response.data.statusMessage === '성공') {
            console.log(response.data.data.accessToken)
            setAuthenticated(true)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value = {{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}