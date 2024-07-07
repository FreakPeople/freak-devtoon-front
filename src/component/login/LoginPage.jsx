import './LoginPage.css'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.jsx";
import {useState} from "react";
import {Modal} from "@mui/material";
import RegisterMember from "./RegisterMember.jsx";

export default function LoginPage() {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [open, setOpen] = useState(false)

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

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

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
                    <button type="button" name="login" onClick={handleSubmit}>로그인</button>
                    <button type="button" name="registerMember" onClick={handleOpen}>회원가입</button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                    >
                        <RegisterMember handleClose = {handleClose}/>
                    </Modal>
                </div>
            </div>
        </div>
    )

}