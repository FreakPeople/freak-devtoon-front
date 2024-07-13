import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WarningIcon from '@mui/icons-material/Warning';
import CookieIcon from '@mui/icons-material/Cookie';
import DateFormatter from "../../util/DateFormatter.jsx";


function MyInfo(props) {

    const myInfoStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding: '4px 4px 4px 4px',
        border: '1px solid black'
    }

    const firstLine = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: '20px'
    }

    const name = {
        padding: '3px 6px 4px 6px',
        marginRight: '8px',
        backgroundColor: '#4f4f4f',
        height: '18px',
        fontSize: '18px',
        color: 'white',
        border: 'solid 1px',
        borderRadius: '6px'
    }

    const membershipStatus = {
        marginTop: '2px',
        marginRight: '2px',
        padding: '3px 6px 4px 6px',
        height: '16px',
        fontSize: '16px',
        color: '#615F5C',
        border: 'solid 1px #615F5C',
        borderRadius: '6px'
    }

    const lineFont = {
        margin: '2px',
        height: '14px',
        fontSize: '14px',
        color: '#615F5C'
    }

    const infoLine = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '3px'
    }

    const infoIcon = {
        color: '#615F5C'
    }

    const {myInfo, myWarningCount, myCookieQuantity} = props;

    return (
        <div style={myInfoStyle}>
            <div style={firstLine}>
                <div style={name}>{myInfo['name']}</div>
                <div style={membershipStatus}>{myInfo['membershipStatus']}</div>
            </div>
            <div style={infoLine}>
                <EmailIcon style={infoIcon} sx={{ fontSize: 12 }}></EmailIcon>
                <div style={lineFont}>이메일 : {myInfo['email']}</div>
            </div>
            <div style={infoLine}>
                <CalendarMonthIcon style={infoIcon} sx={{ fontSize: 12}}></CalendarMonthIcon>
                {/*이 부분만 substring 사용하면 에러 발생*/}
                <div style={lineFont}>가입일 : {DateFormatter.format(myInfo['createdAt'])}</div>
            </div>
            <div style={infoLine}>
                <WarningIcon style={infoIcon} sx={{ fontSize: 12}}></WarningIcon>
                <div style={lineFont}>비속어 경고 횟수 : {myWarningCount['count']}</div>
            </div>
            <div style={infoLine}>
                <CookieIcon style={infoIcon} sx={{ fontSize: 12}}></CookieIcon>
                <div style={lineFont}>보유 쿠키 개수 : {myCookieQuantity['quantity']}</div>
            </div>

        </div>
    )
}

export default MyInfo;