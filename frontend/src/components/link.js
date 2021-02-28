import React from 'react';
import '../link.css';

function Link(props) {
    const buttonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        marginTop: '1.5vh',
        width: '100%'
    }
    return (
        <div className = "divStyle">
            <button className = 'buttonStyle'>
                <a className = "aStyle" href = {props.url} target = "_blank">
                    {props.title}
                </a>
            </button>
        </div>
    );
}

export default Link;