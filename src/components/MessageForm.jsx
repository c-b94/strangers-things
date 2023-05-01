import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useState } from 'react'
import { postMessages } from '../API'

export default function MessageForm() {

    const navigate = useNavigate();
  const { postId } = useParams();
  const [content, setContent] = useState("");
  const { token } = useAuth();
  console.log("postId",postId);
    useEffect(()=>{},[])
  return (
    <div className="messagePost">
      <h1 className="messageFormTitle">Send Post Message</h1>
      <form
        className="gradient-border"
        id="box1"
        onSubmit={async (e) => {
          e.preventDefault();
          const data = {token: token,postId: postId,content: content}
          await postMessages(data);
           navigate("/");
        }}
      >
        <label>Content:</label>
        <textarea
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br></br>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}
