import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Nav from "./component/common/Nav.jsx";
import DevtoonPage from "./component/devtoon_list/DevtoonPage.jsx";
import PromotionPage from "./component/promotion/PromotionPage.jsx";
import AdminPage from "./component/admin/AdminPage.jsx";
import MyPage from "./component/mypage/MyPage.jsx";
import DevtoonDetailPage from "./component/devtoon_detail/DevtoonDetailPage.jsx";
import AuthProvider, {useAuth} from "./context/AuthContext.jsx";
import LoginPage from "./component/login/LoginPage.jsx";
import Error from "./component/common/Error.jsx";
import {useEffect} from "react";

function AuthenticatedRoute({children}) {
    const authContext = useAuth()

    if (authContext.isAuthenticated) {
        return children
    }

    return <Navigate to="/login" />
}

function AdminRoute({children}) {
    const authContext = useAuth()

    if (authContext.isAdmin) {
        return children
    }

    useEffect(() => {
        if (!authContext.isAdmin) {
            alert("관리자만 접근할 수 있습니다.");
        }
    }, [authContext.isAdmin]);

    if (authContext.isAuthenticated) {
        return <Navigate to="/devtoon-list" />
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
                        <AdminRoute>
                            <AdminPage />
                        </AdminRoute>
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
