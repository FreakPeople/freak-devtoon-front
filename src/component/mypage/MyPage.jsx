import {useEffect, useState} from "react";
import MyInfo from "./MyInfo.jsx";
import {
    retrieveAllMyDevtoonsApiRequest,
    retrieveBadWordsWarningCountApiRequest,
    retrieveCookieWalletApiRequest,
    retrieveMemberApiRequest
} from "../../api_service/DevtoonApiService.js";
import Devtoon from "../devtoon_list/Devtoon.jsx";

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
        maxWidth: '700px'
    }

    const myInfoTitle = {
        marginBottom: '20px'
    }

    const myDevtoonContainer = {
        display: 'flex',
        flexWrap: 'wrap'
    }

    const [myInfo, setMyInfo] = useState([])
    const [myWarningCount, setMyWarningCount] = useState([])
    const [myCookieQuantity, setMyCookieQuantity] = useState([])
    const [myDevtoons, setMyDevtoons] = useState([])

    useEffect(() => {
        retrieveMemberApiRequest()
            .then((response) => {
                setMyInfo(response.data.data)
            })
    }, []);

    useEffect(() => {
        retrieveBadWordsWarningCountApiRequest()
            .then((response) => {
                setMyWarningCount(response.data.data)
            })
    }, []);

    useEffect(() => {
        retrieveCookieWalletApiRequest()
            .then((response) => {
                setMyCookieQuantity(response.data.data)
            })
    }, []);

    useEffect(() => {
        retrieveAllMyDevtoonsApiRequest()
            .then((response) => {
                setMyDevtoons(response.data.data.content)
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
                <div style={myDevtoonContainer}>
                    {myDevtoons.map((devtoon, index) => {
                        return <Devtoon key={index} devtoon={devtoon} isMypage={true}/>
                    })}
                </div>
            </div>
            <div style={sideBar}></div>

        </div>
    );
}

export default MyPage;