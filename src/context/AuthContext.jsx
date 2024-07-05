import {createContext, useContext, useState} from "react";
import {apiClient, loginApiRequest} from "../api_service/DevtoonApiService.js";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    async function login(email, password) {
        const response = await loginApiRequest(email, password)

        if (response.data.statusMessage === '성공') {

            const jwtToken = 'Bearer ' + response.data.data.accessToken

            apiClient.interceptors.request.use(
                (config) => {
                    console.log('intercepting and adding a token')
                    config.headers.Authorization = jwtToken
                    return config
                }
            )
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