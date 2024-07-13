import {useEffect, useState} from "react";

export default function DevtoonImage(props) {

    const { id, fileName, isMypage } = props;

    const devtoonImageStyle = {
        borderRadius: '20px',
        width: isMypage ? '224px' : '350px',
        height: isMypage ? '224px' : '350px',
    }

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const baseUrl = 'http://localhost:8080'
        const url = baseUrl + '/v1/webtoons/' + id + '/images/' + fileName
        setImageUrl(url);
    }, [id, fileName]);

    return (
        <img style={devtoonImageStyle} src={imageUrl} alt="devtoon image"/>
    );
}