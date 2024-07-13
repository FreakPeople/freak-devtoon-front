import FavoriteIcon from '@mui/icons-material/Favorite';
import {FavoriteBorderOutlined} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import './Devtoon.css'
import {useNavigate} from "react-router-dom";
import DevtoonImage from "./DevtoonImage.jsx";
import DateFormatter from "../../util/DateFormatter.jsx";

function Devtoon(props) {

    const { devtoon, isMypage } = props;

    const devtoonContainer = {
        marginBottom: '20px',
        marginRight: '4px',
        marginLeft: '4px',
        display: 'flex',
    }

    const sideBar = {
        flex: '1',
    }

    const centerStyle = {
        position: 'relative',
        width: isMypage ? '224px' : '350px',
    };

    const FavoriteStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px'
    }

    const genreLine = {
        display: 'flex',
        padding: '2px',
        color: '#504E4B'
    }

    const genre = {
        marginTop: '2px',
        marginRight: '2px',
        padding: '3px 6px 6px 6px', // 북, 동, 남, 서
        height: '20px',
        fontSize: '18px',
        border: 'solid 1px #615F5C',
        borderRadius: '6px'
    }

    const createdAtLine = {
        padding: '2px 2px 2px 4px',
        color: '#504E4B',
        fontSize: '12px'
    }

    const writerLine = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2px 6px 2px 4px',
        color: '#504E4B'
    }

    const favoriteIconStyle = {
        marginLeft: 'auto',
        marginRight: '4px'
    }


    const navigate = useNavigate()

    const onClickDetail = ()=> {
        navigate(`/devtoon-list/${devtoon['webtoonId']}`)
    }

    return (
        <div style={devtoonContainer}>
            <div style={sideBar}></div>
            <div className="devtoonContainer" style={centerStyle} onClick={() => onClickDetail()}>
                <DevtoonImage id={devtoon['webtoonId']} fileName={devtoon['imageUrl']} isMypage={isMypage}/>
                <IconButton style={FavoriteStyle} color="error">
                    <FavoriteBorderOutlined/>
                </IconButton>
                <div style={genreLine}>
                    <div style={genre}>{devtoon['genre']}</div>
                    <div style={genre}>{devtoon['genre']}</div>
                </div>
                <div style={createdAtLine}>{DateFormatter.format(devtoon['createdAt'])}</div>
                <div style={writerLine}>
                    <div>{devtoon['writerName']}</div>
                    <FavoriteIcon style={favoriteIconStyle}></FavoriteIcon>
                    <div>17</div>
                </div>
            </div>
            <div style={sideBar}></div>
        </div>
    )
}

export default Devtoon;