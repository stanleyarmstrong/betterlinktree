import React from 'react';
import Form from './form';

function Signup() {
    const text = ['Username', 'E-mail', 'Password', 'Confirm Password'];
    const fields = text.map((word) => {
        return (
            <Form placeholder = {word} />
        );
    });
    return (
        <div>
            <h1>
                Sign Up for Better Links
            </h1>
            <form>
                {fields}
            </form>
        </div>
    )
}

export default Signup;