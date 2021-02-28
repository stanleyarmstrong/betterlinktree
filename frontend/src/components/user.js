import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Link from './link';

function User(props) { 

    const [userData, setUserData] = useState({
        username: '',
        profile_pic: '',
        color1: '',
        color2: '',
        links: [],
    });
    useEffect(async () => {
        const result = await axios('http://localhost:8000/api/users/' + props.match.params.username+'/');
        setUserData(result.data);
    });
    const links = userData.links.map((link) => {
        const titleUrl = link.split('\\');
        return (
            <Link title = {titleUrl[0]} url = {titleUrl[1]} />
        );
    }); 

    const imageStyle = {
        borderRadius: '50%',
        width: '125px',
        height: '125px',
        border: 'solid',
        borderColor: '#ffffff',
        marginTop: '4vh'
    }
    const centerStyle = {
        display: 'flex',
        justifyContent: 'center' 
    }
    const h1Style = {
        textAlign: 'center',
        color: 'white',
        fontSize: '2.5vh'
    }
    const divStyle = {
        backgroundImage: 'linear-gradient(#' + userData.color1 + ', #' + userData.color2 + ')',
        height: '100vh'
    }
    const blockStyle = {
        display: 'block'
    }

    return (
        <div style = {divStyle}>
            <div style = {centerStyle}>
                <img style = {imageStyle} src = {userData.profile_pic}  alt = "profile pic"/>
            </div>
            <h1 style = {h1Style}>
                @{userData.username}
            </h1>
            <div style = {centerStyle}>
                <div style = {blockStyle}>
                    {links}
                </div>
            </div>
        </div>
    )
}

export default User;