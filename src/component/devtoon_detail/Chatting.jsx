import ChatData from "./ChatData.jsx";
import {TextField, Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {writeCommentApiRequest} from "../../api_service/DevtoonApiService.js";

function Chatting(props) {

    const recently = {
        marginBottom: '30px'
    }

    const content = {
        padding: '12px',
        height: '90%',
        overflow: 'auto'
    }

    const bottom = {
        display: 'flex',
        borderTop: '0.5px solid grey',
        height: '10%'
    }

    const commentInputStyle = {
        flex: '9',
        display: 'flex',
        alignItems: 'center'
    }

    const commentInputButton = {
        flex: '4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const inputBox = {
        marginLeft: '8px'
    }

    const navigate = useNavigate()

    const [commentContent, setCommentContent] = useState('')

    const onInputContentChange = (e) => {
        setCommentContent(e.target.value)
    }

    const onClickCommentRegister = () => {
        writeCommentApiRequest(devtoon['webtoonId'], commentContent)
            .then((response) => {
                console.log(response.data)
                window.location.reload()
            })
    }

    const { devtoon, comments } = props;

    return (
      <>

          <div style={content}>
              <div style={recently}>[최신 댓글]</div>
              {
                  comments.map((comment, index) => {
                      return <ChatData key={index} comment={comment}/>
                  })
              }
          </div>
          <div style={bottom}>
          <div style={commentInputStyle}>
                  <TextField onChange={onInputContentChange} style={inputBox} id="outlined-basic" label="댓글 입력" variant="outlined" size="small"/>
              </div>
              <div style={commentInputButton}>
                  <Button onClick={onClickCommentRegister} variant="outlined" endIcon={<SendIcon/>}>등록</Button>
              </div>
          </div>
      </>
    );
}

export default Chatting;