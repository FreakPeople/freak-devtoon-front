
function ChatData(props) {

    const chatStyle = {
        marginBottom: '12px'
    }

    const webtoonViewerStyle = {
        margin: '6px',
        fontSize: '12px',

    }

    const contentStyle = {
        margin: '6px',
        padding: '8px',
        border: '1px solid grey',
        borderRadius: '4px'
    }

    const createAtStyle = {
        margin: '6px',
        fontSize: '10px',
        color: '#615F5C'
    }

    const { comment } = props;

    return (
        <div style={chatStyle}>
            <div style={webtoonViewerStyle}>홍길동 : {comment['webtoonViewerNo']}</div>
            <div style={contentStyle}>{comment['content']}</div>
            <div style={createAtStyle}>{comment['createAt']}</div>
        </div>
    );
}

export default ChatData;