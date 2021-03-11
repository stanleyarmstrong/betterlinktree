import React from 'react';

function Form(props) {
    return (
        <div>
            <label>
                <input type = "text" placeholder = {props.placeholder} />
            </label>
        </div>
    )
}

export default Form;