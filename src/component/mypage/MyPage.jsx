import {useEffect, useState} from "react";
import axios from "axios";
import MyInfo from "./MyInfo.jsx";

function MyPage() {
    const bodyContainer = {
        display: 'flex',
    };

    const sideBar = {
        flex: '1',
    }

    const myInfoContent = {
        marginTop: '50px',
        flex: '4',
    }

    const myInfoTitle = {
        marginBottom: '20px'
    }

    const [myInfo, setMyInfo] = useState([])
    const [myWarningCount, setMyWarningCount] = useState([])
    const [myCookieQuantity, setMyCookieQuantity] = useState([])

    const memberId = 1

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/v1/webtoon-viewers/' + memberId
        }).then((response) => {
            setMyInfo(response.data.data)
        })
    }, []);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/v1/bad-words-warning-count?webtoonViewerNo=' + memberId
        }).then((response) => {
            setMyWarningCount(response.data.data)
        })
    }, []);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/v1/cookie-wallets?webtoonViewerNo=' + memberId
        }).then((response) => {
            setMyCookieQuantity(response.data.data)
        })
    }, []);

    return (
        <div style={bodyContainer}>
            <div style={sideBar}></div>
            <div style={myInfoContent}>
                <div style={myInfoTitle}>마이 페이지</div>
                <MyInfo
                    myInfo={myInfo}
                    myWarningCount={myWarningCount}
                    myCookieQuantity={myCookieQuantity}
                />
            </div>
            <div style={sideBar}></div>

        </div>
    );
}

export default MyPage;