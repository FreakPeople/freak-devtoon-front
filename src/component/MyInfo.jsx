
function MyInfo(props) {

    const myInfoStyle = {
        border: '1px solid black'
    }

    const {myInfo} = props;

    return (
        <div style={myInfoStyle}>
            <p>{myInfo['name']}</p>
            <p>{myInfo['membershipStatus']}</p>
        </div>
    )
}

export default MyInfo;