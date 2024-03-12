import React, { useContext } from 'react';
import './Register.css'; // Assuming you have some styling for the registration form
import { UserContext } from './App'; // Assuming you have the UserContext from App.js

export default function Register() {
    const { flag, setFlag } = useContext(UserContext);

    const handleSubmit = () => {
        // Submit logic, e.g., send data to server
        // After successful submission, transition to home page
        setFlag(2); // Transition to Home component
    };

    return (
        <>
            <div className='Register-model'>
                <div className='Register-model-content'>
                    <div className="Rigister-header">
                        <div className="Register-signup-title">Register</div>
                        <div onClick={() => setFlag(0)} className="close">
                            &times;
                        </div>
                    </div>
                    <input type='text' placeholder="Username"></input><br></br>
                    <input type='email' placeholder="Email"></input><br></br>
                    <input type='password' placeholder="Password"></input><br></br>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    );
}
