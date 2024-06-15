import {useEffect, useState} from "react";
import axios from "axios";
import Promotion from "../component/Promotion.jsx";
import {Button, ToggleButton, ToggleButtonGroup} from "@mui/material";

function AdminPage() {

    const isAdmin = true

    const bodyContainer = {
        display: 'flex',
    };

    const sideBar = {
        flex: '1',
    }

    const promotionContent = {
        flex: '4',
    }

    const promotionMenus = {
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'space-between'
    }

    const promotionMenu = {
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
                <div style={promotionMenus}>
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
                    <div>
                        <Button size="medium">행사 등록</Button>
                    </div>
                </div>
                {promotions.map((promotion, index) => {
                    return <Promotion key={index} promotion={promotion} isAdmin={isAdmin}/>
                })}
            </div>
            <div style={sideBar}></div>
        </div>
    );
}

export default AdminPage;