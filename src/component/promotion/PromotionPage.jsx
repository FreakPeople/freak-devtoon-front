import {useEffect, useState} from "react";
import Promotion from "./Promotion.jsx";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {
    retrieveAllPromotionsEndedApiRequest,
    retrieveAllPromotionsNowApiRequest, retrieveBadwordsPolicyApiRequest,
    retrieveCookiePolicyApiRequest
} from "../../api_service/DevtoonApiService.js";
import CookiePolicy from "./CookiePolicy.jsx";
import BadwordsPolicy from "./BadwordsPolicy.jsx";

function PromotionPage() {
    const bodyContainer = {
        display: 'flex',
    };

    const sideBar = {
        flex: '1',
    }

    const promotionContent = {
        flex: '4',
    }

    const promotionMenu = {
        marginTop: '50px',
        textDecoration: 'none'
    }

    const [promotions, setPromotions] = useState([])
    const [cookiePolicy, setCookiePolicy] = useState([])
    const [badwordsPolicy, setBadwordsPolicy] = useState([])
    const [promotionStatus, setPromotionStatus] = useState('20');

    const handleChangePromotionStatus = (e) => {
        setPromotionStatus(e.target.value)
    };

    useEffect(() => {
        if (promotionStatus === '30') {
            console.log('종료 요청');
            retrieveAllPromotionsEndedApiRequest()
                .then((response) => {
                    console.log(response.data.data)
                    setPromotions(response.data.data)
                })
        } else {
            console.log('진행중 요청');
            retrieveAllPromotionsNowApiRequest()
                .then((response) => {
                    console.log(response.data.data)
                    setPromotions(response.data.data)
                })
        }

        retrieveCookiePolicyApiRequest()
            .then((response) => {
                console.log(response.data.data)
                setCookiePolicy(response.data.data)
            })

        retrieveBadwordsPolicyApiRequest()
            .then((response) => {
                console.log(response.data.data)
                setBadwordsPolicy(response.data.data)
            })
    }, [promotionStatus]);

    return (
        <div style={bodyContainer}>
            <div style={sideBar}></div>
            <div style={promotionContent}>
                <div style={promotionMenu}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">행사 상태</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={promotionStatus}
                                label="프로모션 상태"
                                onChange={handleChangePromotionStatus}
                            >
                                <MenuItem value={'10'} disabled>전체(준비중)</MenuItem>
                                <MenuItem value={'20'}>진행 중</MenuItem>
                                <MenuItem value={'30'}>종료</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <CookiePolicy cookiePolicy={cookiePolicy}/>
                <BadwordsPolicy badwordsPolicy={badwordsPolicy}/>
                {promotions.map((promotion, index) => {
                    return <Promotion key={index} promotion={promotion} promotionStatus={promotionStatus}/>
                })}
            </div>
            <div style={sideBar}></div>
        </div>
    );
}

export default PromotionPage;