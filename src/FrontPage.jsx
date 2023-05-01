import React from 'react'
import OfferBoard from './components/OfferBoard'
import Login from './components/Login'
import { Routes, Route, Link } from 'react-router-dom'
import Register from './components/Register'
import UserPage from './components/UserPage'
import Postings from './components/Postings'
import MessageForm from './components/MessageForm'
export default function FrontPage(props) {
  const setToken = props.setToken;
  return (
    <div>
        <Routes>
            <Route path="/" element={<OfferBoard/>}/>
            <Route path ="/login" element={<Login setToken={setToken}/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/users/me" element={<UserPage token={props.token}/>}/>
            <Route path="/posts" element={<Postings token={props.token}/>}/>
            <Route path="/MessageForm/:postId" element={<MessageForm />}/>
        </Routes>
    </div>
  )
}
