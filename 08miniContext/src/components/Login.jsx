import React from 'react'
import { useState,useContext } from 'react';
import UserContext from '../Context/UserContext';
function Login() {
    const [username, setUsername] =useState('');
    const [password, setPassword] =useState('');
    const {setUser}=useContext(UserContext);
    function handleForm(e){
        e.preventDefault();
        // Here you would typically handle the login logic, e.g., API call
        setUser({
            username,password
        })
    }
  return (
    <div>
        <input type="text" name='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleForm}>Submit</button>
        </div>
  )
}

export default Login