import './LoginPage.css'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";
import {useState} from "react";

export default function LoginPage() {

    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const authContext = useAuth()

    function handeUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handePasswordChange(event) {
        setPassword(event.target.value)
    }

    const handleSubmit = () => {
        if (authContext.login(username, password)) {
            navigate('/devtoon-list'); // navigate 함수 사용
        } else {
            alert('로그인에 실패했습니다.')
        }
    };

    return (
        <div className="login">
            <div className="loginForm">
                <div className="loginFormElem">
                    <label>아이디 : </label>
                    <input type="text" name="username" value={username} onChange={handeUsernameChange}/>
                </div>
                <div className="loginFormElem">
                    <label>비밀번호 : </label>
                    <input type="text" name="password" value={password} onChange={handePasswordChange}/>
                </div>
                <div className="loginFormElem">
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )

}