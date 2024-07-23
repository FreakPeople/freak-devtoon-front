import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Devtoon from "../devtoon_list/Devtoon.jsx";
import Chatting from "./Chatting.jsx";
import {retrieveAllCommentApiRequest, retrieveDevtoonApiRequest} from "../../api/DevtoonApiService.js";

function DevtoonDetailPage() {

    const bodyContainer = {
        display: 'flex',
        width: '100%',
        height: '100%',
    }

    const sideBar = {
        flex: '1',
    }

    const centerStyle = {
        flex: '4',
    };

    const devtoonDetail = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        height: '600px',
        overflow: 'auto'
    }

    const titleStyle = {
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#545454'
    }

    const bottomBar = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px'
    }

    const {id} = useParams()

    const [devtoon, setDevtoon] = useState([])
    const [comments, setcomments] = useState([])


    useEffect(() => {
        retrieveDevtoonApiRequest(id)
            .then((response) => {
                setDevtoon(response.data.data)
            })

        retrieveAllCommentApiRequest(id)
            .then((response) => {
                setcomments(response.data.data.content)
            })
    }, []);


    return (
        <>
            <div style={bodyContainer}>
                <div style={sideBar}></div>
                <div style={centerStyle}>
                    <div style={titleStyle}>상세보기</div>
                    <div style={devtoonDetail}>
                        <Devtoon devtoon={devtoon}/>
                        <Chatting devtoon={devtoon} comments={comments}/>
                    </div>
                </div>
                <div style={sideBar}></div>
            </div>
            <div style={bottomBar}>
                <div>xxxxxx@naver.com</div>
                <div>yjh.corp</div>
            </div>
        </>
    );
}

export default DevtoonDetailPage;