import './LoginPage.css'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.jsx";
import {useState} from "react";

export default function LoginPage() {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const authContext = useAuth()

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    const handleSubmit = async () => {
        const loginSuccessed = await authContext.login(email, password);

        if (loginSuccessed) {
            navigate('/devtoon-list'); // navigate 함수 사용
        } else {
            alert('로그인에 실패했습니다.')
        }
    };

    return (
        <div className="login">
            <div className="loginForm">
                <div className="loginFormElem">
                    <label>이메일 : </label>
                    <input type="text" name="email" value={email} onChange={handleEmailChange}/>
                </div>
                <div className="loginFormElem">
                    <label>비밀번호 : </label>
                    <input type="text" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div className="loginFormElem">
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )

}