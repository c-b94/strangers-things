import React from 'react'
import { useState } from 'react'
import Register from './Register';
import { postUsersLogin } from '../API';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Login() {
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const { token, user, setToken } = useAuth();
const navigate = useNavigate();



async function handleSubmit(e){
    e.preventDefault();
    console.log("username",username);
    console.log("password",password);
     const login = await postUsersLogin(username,password);
     console.log("testing",login)
     setToken(login.data.token)
     localStorage.setItem("token", login.data.token)
    
    if(login.success){
    setUsername("");
    setPassword("");
    navigate("/")
    }
}



  return (
    <div>
      <h1>Login</h1>
    <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
        <label htmlFor="">UserName</label>
        <input type="text" name="username" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}} />
        <label htmlFor="">Password</label>
        <input type="text" name="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} />
        <button>Login</button>
    </form>
    <button onClick={()=>{navigate('/register')}}>Register!</button>

    </div>
  )
}
