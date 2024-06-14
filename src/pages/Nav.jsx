import {Link} from "react-router-dom";

function Nav() {
    const navStyle = {
        border: '1px solid black'
    };

    const navItem = {
        margin: '10px'
    }

    return (
        <div style={navStyle}>
            <Link to="/devtoon-list" style={navItem}>데브툰</Link>
            <Link to="/promotion" style={navItem}>이벤트</Link>
            <Link to="/admin" style={navItem}>관리자</Link>
            <Link to="/my" style={navItem}>마이페이지(로고)</Link>
        </div>
    )
}

export default Nav;