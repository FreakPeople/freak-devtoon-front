import {useEffect, useState} from "react";
import axios from "axios";
import Promotion from "../component/Promotion.jsx";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";

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

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/v1/promotions/now'
        }).then((response) => {
            setPromotions(response.data.data)
        })
    }, []);

    return (
        <div style={bodyContainer}>
            <div style={sideBar}></div>
            <div style={promotionContent}>
                <div style={promotionMenu}>
                    <ToggleButtonGroup
                        color="primary"
                        // value={alignment}
                        exclusive
                        // onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton size="small">전체</ToggleButton>
                        <ToggleButton size="small">진행 중</ToggleButton>
                        <ToggleButton size="small">종료</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                {promotions.map((promotion, index) => {
                    return <Promotion key={index} promotion={promotion}/>
                })}
            </div>
            <div style={sideBar}></div>
        </div>
    );
}

export default PromotionPage;