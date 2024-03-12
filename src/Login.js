import React, { useContext } from 'react';
import { UserContext } from './App';
import Register from './Register';

export default function Login() {
    const { flag, setFlag } = useContext(UserContext);

    return (
        <>
            <div>Login</div>
            <input type='text' placeholder="Username"></input><br></br>
            <input type='password' placeholder="Password"></input><br></br>
            <button onClick={() => setFlag(2)}>Login</button>
            <button onClick={() => setFlag(1)}>Create Account</button>
            {flag === 1 && <Register />}
        </>
    );
}
