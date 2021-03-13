import React from 'react';
import {useHistory} from 'react-router-dom';

function Signup() {
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/profile/:username/edit");
    };
    return (
        <div>
            <h1>
                Sign Up for Better Links
            </h1>
            <form onSubmit = {handleSubmit}>
                 <input placeholder = "username" />
                 <input type = "email" placeholder = "email"/>
                 <input type = "password" placeholder = "password"/>
                 <input type = "password" placeholder = "confirm password"/>
                 <input type = "submit" value = "submit"/>
            </form>
        </div>
    )
}

export default Signup;