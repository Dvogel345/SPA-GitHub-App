import React from 'react';

const Form = (props) => (
    <div>
        <form onSubmit={props.getUserInfo}>
            <div>
                <input type="text" name="username" required/>
                <label>Username</label>
            </div>
            <button>Find</button>
        </form>
    </div>
);

export default Form; 