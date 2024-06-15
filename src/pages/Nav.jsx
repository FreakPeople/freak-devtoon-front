import {Link} from "react-router-dom";
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';

function Nav() {

    const navContainer = {
        display: 'flex',
        height: '60px',
        width: '100%',
        backgroundColor: '#383836'
    };

    const sideBar = {
        flex: '1',
    }

    const centerStyle = {
        flex: '4',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const navItem = {
        margin: '10px',
        textDecoration: 'none',
        color: '#b7b7b7'
    }

    const logoStyle = {
        width: '80px',
        height: '50px',
        margin: '10px'
    }

    const menuContainer = {
        display: 'flex',
        alignItems: 'center',
        // minWidth: '230px'
    }

    return (
        <div style={navContainer}>
            <div style={sideBar}></div>
            <div style={centerStyle}>
                <div>
                    <Link to="/devtoon-list">
                        <img style={logoStyle} src='./src/assets/logo.png' alt="devtoon image"/>
                    </Link>
                </div>
                <div style={menuContainer}>
                    <Link to="/devtoon-list" style={navItem}>데브툰</Link>
                    <Link to="/promotion" style={navItem}>이벤트</Link>
                    <Link to="/admin" style={navItem}>관리자</Link>
                    <Link to="/my" style={navItem}>
                        <PersonOutlineOutlined/>
                    </Link>
                </div>
            </div>
            <div style={sideBar}></div>
        </div>
    )
}

export default Nav;