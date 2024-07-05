import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Nav from "./pages/Nav.jsx";
import DevtoonPage from "./pages/DevtoonPage.jsx";
import PromotionPage from "./pages/PromotionPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import DevtoonDetailPage from "./pages/DevtoonDetailPage.jsx";
import AuthProvider, {useAuth} from "./context/AuthContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Error from "./component/Error.jsx";

function AuthenticatedRoute({children}) {
    const authContext = useAuth()

    if (authContext.isAuthenticated) {
        return children
    }

    return <Navigate to="/login" />
}

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/devtoon-list" element={<DevtoonPage />} />
                    <Route path="/devtoon-list/:id" element={<DevtoonDetailPage />} />
                    <Route path="/promotion" element={<PromotionPage />} />

                    <Route path="/admin" element={
                        <AuthenticatedRoute>
                            <AdminPage />
                        </AuthenticatedRoute>
                    } />
                    <Route path="/my" element={
                        <AuthenticatedRoute>
                            <MyPage />
                        </AuthenticatedRoute>
                    } />

                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
