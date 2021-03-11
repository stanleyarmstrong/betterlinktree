import React from 'react';
import '../styles/link.css';

function Link(props) {
    return (
        <div className = "divStyle">
            <button className = 'buttonStyle'>
                <a className = "aStyle" href = {props.url} target = "_blank" rel = "noreferrer">
                    {props.title}
                </a>
            </button>
        </div>
    );
}

export default Link;