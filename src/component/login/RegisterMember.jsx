import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import {registerMemberApiRequest} from "../../api_service/DevtoonApiService.js";

export default function RegisterMember(props) {

    const box = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const { handleClose } = props

    const [name, setName] = useState('')

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    async function handleRegister() {
        const response = await registerMemberApiRequest(name, email, password)

        if (response.data.statusMessage === '성공') {
            alert('회원 가입에 성공 했습니다.')
            handleClose()
        } else {
            alert(response.data.data.detailMessage)
        }
    }

    return (
        <Box className="modal" sx={{...box}}>
            <h2 id="child-modal-title">회원가입</h2>
            <p id="child-modal-description">
                회원을 등록해주세요!
            </p>
            <div className="inputField">
                <div className="field">
                    <TextField id="outlined-basic" label="이름"
                               variant="outlined"
                               value={name} onChange={handleNameChange}/>
                </div>
                <div className="field">
                    <TextField id="outlined-basic" label="이메일"
                               variant="outlined"
                               value={email} onChange={handleEmailChange}/>
                </div>
                <div className="field">
                    <TextField id="outlined-basic" label="비밀번호"
                               variant="outlined"
                               value={password}
                               onChange={handlePasswordChange}
                               error={password.length !== 0 && password.length < 6}
                               helperText="비밀번호는 6자리 이상이어야 합니다."
                    />
                </div>
            </div>
            <div className="buttons">
                <Button onClick={handleClose}>나가기</Button>
                <Button onClick={handleRegister} disabled={password.length < 6}>가입하기</Button>
            </div>
        </Box>
    )
}