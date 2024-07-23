import {createContext, useContext, useState} from "react";
import {loginApiRequest, setJwtToken, removeJwtToken} from "../api/DevtoonApiService.js";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const initializeAuth = () => {
        const token = sessionStorage.getItem('jwt');
        return token ? true : false;
    };

    const [isAuthenticated, setAuthenticated] = useState(initializeAuth)
    const [isAdmin, setIsAdmin] = useState(false)

    async function login(email, password) {
        const response = await loginApiRequest(email, password)

        // TODO : 관리자라면 관리자라고 알려줘야함. isAdmin true로 바꿀 것.

        if (response.data.statusMessage === '성공') {
            const jwtToken = 'Bearer ' + response.data.data.accessToken
            setJwtToken(jwtToken)
            setAuthenticated(true)
            return true
        } else {
            removeJwtToken()
            setAuthenticated(false)
            return false
        }
    }

    function logout() {
        removeJwtToken()
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value = {{ isAdmin, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}