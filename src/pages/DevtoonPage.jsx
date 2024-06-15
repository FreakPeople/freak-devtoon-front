import Devtoon from "../component/Devtoon.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "@mui/material";

function DevtoonPage() {
    const bodyContainer = {
        display: 'flex',
        width: '100%',
        border: '1px solid black'
    }

    const sideBar = {
        flex: '1',
        border: '1px solid black'
    }

    const centerStyle = {
        flex: '4',
        border: '1px solid black'
    };

    const devtoonList = {
        border: '1px solid black'
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
    );
}

export default DevtoonPage;