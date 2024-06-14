import {useEffect, useState} from "react";
import axios from "axios";
import MyInfo from "../component/MyInfo.jsx";

function MyPage() {
    const bodyStyle = {
        border: '1px solid black'
    };

    const [myInfo, setMyInfo] = useState([])

    useEffect(() => {
        let memberId = 1
        axios({
            method: 'GET',
            url: 'http://localhost:8080/v1/webtoon-viewers/' + memberId
        }).then((response) => {
            setMyInfo(response.data.data)
        })
    }, []);

    return (
        <div style={bodyStyle}>
            <div>마이 페이지</div>
            <MyInfo myInfo={myInfo}/>
        </div>
    );
}

export default MyPage;