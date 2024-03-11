import React, { useContext } from 'react'
import { UserContext } from './App'
import Home from './Home';
import Register from './Register';


export default function Login() {
    const {flag, setFlag}=useContext(UserContext);
// if (flag == 1) {
//     <Home/>
// } else if (flag == 2) {
//   <> <Login/>
//     <Register/></> 
// } 
  return (
    <>
    <div>Login</div>
    <button onClick={()=>setFlag((prev)=>2)}>Login</button>
    <button onClick={()=>setFlag((prev)=>1)}>Create Account</button>
    {flag===1 && (<Register />)}
    </> 
  )
}