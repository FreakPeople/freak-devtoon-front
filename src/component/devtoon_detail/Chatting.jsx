import './Chatting.css'
import ChatData from "./ChatData.jsx";
import {TextField, Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";
import {writeCommentApiRequest} from "../../api/DevtoonApiService.js";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.jsx";

export default function Chatting(props) {

    const { devtoon, comments } = props;

    const [commentContent, setCommentContent] = useState('')

    const navigate = useNavigate();

    const authContext = useAuth()

    const onInputContentChange = (e) => {
        setCommentContent(e.target.value)
    }

    async function onClickCommentRegister() {
        if (!authContext.isAuthenticated) {
            navigate('/login')
        }

        const response = await writeCommentApiRequest(devtoon['webtoonId'], commentContent)

        if (response.data.statusMessage === '성공') {
            window.location.reload()
        } else {
            console.log(response.data)
        }
    }

    return (
      <div className="chattingContainer">
          <div className="content">
              <div id="recently">[최신 댓글]</div>
              {
                  comments.map((comment, index) => {
                      return <ChatData key={index} comment={comment}/>
                  })
              }
          </div>
          <div className="bottom">
              <div id="commentInputStyle">
                  <TextField className="inputBox" onChange={onInputContentChange} id="outlined-basic" label="댓글 입력" variant="outlined" size="small"/>
              </div>
              <div id="commentInputButton">
                  <Button onClick={onClickCommentRegister} variant="outlined" endIcon={<SendIcon/>}>등록</Button>
              </div>
          </div>
      </div>
    );
}