import Devtoon from "../component/Devtoon.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function DevtoonPage() {
    const bodyStyle = {
        border: '1px solid black'
    }

    const devtoonList = {
        border: '1px solid black'
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
        <div style={bodyStyle}>
            <div>이거 이거하면 you are devel..p..m...</div>
            <button>데브툰 올리기</button>
            <div style={devtoonList}>
                {devtoons.map((devtoon, index) => {
                    return <Devtoon key={index} devtoon={devtoon}/>
                })}
            </div>
        </div>
    );
}

export default DevtoonPage;