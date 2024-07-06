import {useEffect, useState} from "react";

export default function DevtoonImage(props) {

    const devtoonImageStyle = {
        borderRadius: '20px',
        width: '350px',
        height: '350px'
    }

    const { id, fileName } = props;

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