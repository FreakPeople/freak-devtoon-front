import './DevtoonPage.css'
import Devtoon from "./Devtoon.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {Box, Button, Modal, TextField} from "@mui/material";
import {registerDevtoonApiRequest, retrieveAllDevtoonsApiRequest} from "../../api_service/DevtoonApiService.js";
import {useAuth} from "../../context/AuthContext.jsx";

function DevtoonPage() {

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

    const [devtoons, setDevtoons] = useState([])
    const [open, setOpen] = useState(false)

    const [title, setTitle] = useState('')
    const [writer, setWriter] = useState('')
    const [genre, setGenre] = useState('')
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null);

    const navigate = useNavigate();

    const authContext = useAuth()

    useEffect(() => {
        retrieveAllDevtoonsApiRequest()
            .then((response) => {
                setDevtoons(response.data.data.content)
            })
    }, []);

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }

    function handleWriterChange(event) {
        setWriter(event.target.value)
    }

    function handleGenreChange(event) {
        setGenre(event.target.value)
    }

    function handleImageChange(event) {
        const selectedFile = event.target.files[0];
        setImage(selectedFile);

        // 이미지 미리보기 설정
        const reader = new FileReader();
        reader.onload = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    }

    function handleOpen() {
        if (!authContext.isAuthenticated) {
            navigate('/login')
        }
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    async function handleRegister() {
        if (!image) {
            alert('이미지를 선택해 주세요.');
            return;
        }

        const body = {
            "title" : title,
            "writerName" : writer,
            "genre" : genre
        }

        const formData = new FormData();
        formData.append('request', new Blob([JSON.stringify(body)], { type: 'application/json' }));
        formData.append('image', image);

        const response = await registerDevtoonApiRequest(formData)

        if (response.data.statusMessage === '성공') {
            navigate(0)
        } else {
            alert('게시글 등록 실패')
        }

        setOpen(false);
    }

    return (
        <>
            <div className="bodyContainer">
                <div className="sideBar"></div>
                <div className="centerStyle">
                    <div className="titleStyle">이거 알면 you are devel..p..m...</div>
                    <div className="registerButtonContainer">
                        <Button className="registerButtonStyle" variant="outlined" onClick={handleOpen}>데브툰 올리기</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="child-modal-title"
                            aria-describedby="child-modal-description"
                        >
                            <Box className="modal" sx={{...box}}>
                                <h2 id="child-modal-title">데브툰 올리기</h2>
                                <p id="child-modal-description">
                                    데브툰을 올려주세요!
                                </p>
                                <div className="inputField">
                                    <div className="field">
                                        <TextField id="outlined-basic" label="제목"
                                                   variant="outlined"
                                                   value={title} onChange={handleTitleChange}/>
                                    </div>
                                    <div className="field">
                                        <TextField id="outlined-basic" label="작가"
                                                   variant="outlined"
                                                   value={writer} onChange={handleWriterChange}/>
                                    </div>
                                    <div className="field">
                                        <TextField id="outlined-basic" label="장르"
                                                   variant="outlined"
                                                   value={genre} onChange={handleGenreChange}/>
                                    </div>
                                    <input type="file" id="imageInput" name="image" accept="image/`*"
                                           onChange={handleImageChange}/>
                                    {preview && (
                                        <div className="preview">
                                            <h2>미리보기</h2>
                                            <img src={preview} alt="Preview"
                                                 style={{width: '100%', height: '100%'}}/>
                                        </div>
                                    )}
                                </div>
                                <div className="buttons">
                                    <Button onClick={handleClose}>나가기</Button>
                                    <Button onClick={handleRegister}>등록하기</Button>
                                </div>
                            </Box>
                        </Modal>
                    </div>
                    <div className="devtoonList">
                        {devtoons.map((devtoon, index) => {
                            return <Devtoon key={index} devtoon={devtoon} isMypage={false}/>
                        })}
                    </div>
                </div>
                <div className="sideBar"></div>
            </div>
            <div className="bottomBar">
                <div>xxxxxx@naver.com</div>
                <div>yjh.corp</div>
            </div>
        </>
    );
}

export default DevtoonPage;