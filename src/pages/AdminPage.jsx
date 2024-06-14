import {useEffect, useState} from "react";
import axios from "axios";
import Promotion from "../component/Promotion.jsx";

function AdminPage() {
    const bodyStyle = {
        border: '1px solid black'
    };

    const promotionListStyle = {
        border: '1px solid black'
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
        <div style={bodyStyle}>
            <div>관리자 페이지</div>
            <button>프로모션 수정하기</button>
            <div style={promotionListStyle}>
                {promotions.map((promotion, index) => {
                    return <Promotion key={index} promotion={promotion}/>
                })}
            </div>
        </div>
    );
}

export default AdminPage;