import Devtoon from "../component/Devtoon.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "@mui/material";

function DevtoonPage() {
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

    const devtoonList = {
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
        // border: '1px solid black',
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

    const registerButtonContainer = {
        overflow: 'auto',
        paddingBottom: '10px'
    }

    const registerButtonStyle = {
        float: 'right'
    }

    const bottomBar = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px'
    }

    const [devtoons, setDevtoons] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/v1/webtoons'
        }).then((response) => {
            setDevtoons(response.data.data.content)
        })
    }, []);


    return (
        <>
            <div style={bodyContainer}>
                <div style={sideBar}></div>
                <div style={centerStyle}>
                    <div style={titleStyle}>이거 이거하면 you are devel..p..m...</div>
                    <div style={registerButtonContainer}>
                        <Button style={registerButtonStyle} variant="outlined">데브툰 올리기</Button>
                    </div>
                    <div style={devtoonList}>
                        {devtoons.map((devtoon, index) => {
                            return <Devtoon key={index} devtoon={devtoon}/>
                        })}
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

export default DevtoonPage;