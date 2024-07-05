import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {Button} from "@mui/material";

function Promotion(props) {

    const promotionCard = {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '15px',
        marginBottom: '15px',
        padding: '5px',
        border: '1px solid black'
    }

    const promotionLines = {
        display: 'flex',
        flexDirection: 'column'
    }

    const firstLine = {
        display: 'flex',
        flexWrap: 'wrap'
    }

    const promotionStatus = {
        padding: '3px 6px 4px 6px', // 북, 동, 남, 서
        backgroundColor: '#4f4f4f',
        height: '14px',
        fontSize: '14px',
        color: 'white',
        border: 'solid 1px',
        borderRadius: '6px'
    }

    const promotionTitle = {
        padding: '3px 6px 4px 6px',
        fontSize: '14px'
    }

    const secondLine = {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '3px 0px 4px 0px',
    }

    const thirdLine = {
        marginLeft: '2px',
        padding: '3px 0px 4px 0px',
        fontSize: '10px',
        color: '#615F5C'
    }

    const dateLine = {
        marginTop: '30px',
        display: 'flex',
        alignItems: 'center',
        padding: '3px 0px 4px 0px',
        height: '10px',
        fontSize: '10px'
    }

    const discountAttribute = {
        marginTop: '2px',
        marginRight: '2px',
        padding: '3px 6px 4px 6px', // 북, 동, 남, 서
        height: '10px',
        fontSize: '10px',
        color: '#615F5C',
        border: 'solid 1px #615F5C',
        borderRadius: '6px'
    }

    const promotionEndButton = {
        marginLeft: 'auto'
    }

    const {promotion, isAdmin} = props;

    return (
        <div style={promotionCard}>
            <div style={promotionLines}>
                <div style={firstLine}>
                    <div style={promotionStatus}>진행 중</div>
                    <div style={promotionTitle}>7월 프로모션 파격 행사(오성대 작가 프로모션)</div>
                </div>
                <div style={secondLine}>
                    <div style={discountAttribute}>쿠키할인</div>
                    <div style={discountAttribute}>2개할인</div>
                    <div style={discountAttribute}>중복 적용 불가능</div>
                    <div style={discountAttribute}>중복 적용 불가능</div>
                    <div style={discountAttribute}>중복 적용 불가능</div>
                    <div style={discountAttribute}>중복 적용 불가능</div>
                </div>
                <div style={thirdLine}>
                    description : 동해물과 백두산이 마르고 닭도록 description : 동해물과 백두산이 마르고 닭도록 description : 동해물과 백두산이 마르고 닭도록
                </div>
            </div>
            <div style={dateLine}>
                <div>
                    <CalendarMonthIcon sx={{ fontSize: 12 }}></CalendarMonthIcon>
                </div>
                <div>
                {
                    promotion['startDate'].substring(0, 10).split('-').join('.')
                    + ' ~ ' +
                    promotion['endDate'].substring(0, 10).split('-').join('.')
                }
                </div>
                {isAdmin && <div style={promotionEndButton}><Button size="small">종료</Button></div>}
            </div>

            {/*<p>{promotion['promotionId']}</p>*/}
            {/*<p>{promotion['description']}</p>*/}
            {/*<p>{promotion['discountType']}</p>*/}
            {/*<p>{promotion['discountRate']}</p>*/}
            {/*<p>{promotion['discountQuantity']}</p>*/}
            {/*<p>{promotion['isDiscountDuplicatable']}</p>*/}
            {/*<p>{promotion['startDate']}</p>*/}
            {/*<p>{promotion['endDate']}</p>*/}
        </div>
    )
}

export default Promotion;