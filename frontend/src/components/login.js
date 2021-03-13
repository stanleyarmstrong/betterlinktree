import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/profile/:username");
    }
    return (
        <div>
            <h1>
                Log into your account
            </h1>
            <form onSubmit = {handleSubmit}>
                <input type = "text" placeholder = "username" />
                <input type = "password" placeholder = "password"/>
                <input type = "submit" value = "submit"/>
            </form>
        </div>
    )
}

export default Login;
