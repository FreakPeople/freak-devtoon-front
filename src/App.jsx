import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "./pages/Nav.jsx";
import DevtoonPage from "./pages/DevtoonPage.jsx";
import PromotionPage from "./pages/PromotionPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import DevtoonDetailPage from "./pages/DevtoonDetailPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/devtoon-list" element={<DevtoonPage />} />
                <Route path="/devtoon-list/:id" element={<DevtoonDetailPage />} />
                <Route path="/promotion" element={<PromotionPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/my" element={<MyPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
