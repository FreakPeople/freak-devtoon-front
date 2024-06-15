import FavoriteIcon from '@mui/icons-material/Favorite';
import {FavoriteBorderOutlined} from "@mui/icons-material";
import {IconButton} from "@mui/material";

function Devtoon(props) {

    const devtoonContainer = {
        display: 'flex',
        border: '1px solid black'
    }

    const sideBar = {
        flex: '1',
        border: '1px solid black'
    }

    const centerStyle = {
        position: 'relative',
        width: '350px',
        border: '1px solid black'
    };

    const devtoonImageStyle = {
        borderRadius: '20px',
        width: '350px',
        height: '350px'
    }

    const FavoriteStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px'
    }

    const {devtoon} = props;

    return (
        <div style={devtoonContainer}>
            <div style={sideBar}></div>
            <div style={centerStyle}>
                <img style={devtoonImageStyle} src='./src/assets/logo.png' alt="devtoon image"/>
                <IconButton style={FavoriteStyle} color="error">
                    <FavoriteBorderOutlined/>
                </IconButton>
                <p>{devtoon['webtoonId']}</p>
                <p>{devtoon['title']}</p>
                <p>{devtoon['writerName']}</p>
                <FavoriteIcon></FavoriteIcon>
            </div>
            <div style={sideBar}></div>
        </div>
    )
}

export default Devtoon;