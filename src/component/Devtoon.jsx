
function Devtoon(props) {

    const devtoonCardStyle = {
        border: '1px solid black'
    }

    const devtoonImageStyle = {
        width: '100px',
        height: '100px'
    }

    const {devtoon} = props;

    return (
        <div style={devtoonCardStyle}>
            <img style={devtoonImageStyle} src='./src/assets/logo.png' alt="devtoon image"/>            <p>{devtoon['webtoonId']}</p>
            <p>{devtoon['title']}</p>
            <p>{devtoon['writerName']}</p>
        </div>
    )
}

export default Devtoon;