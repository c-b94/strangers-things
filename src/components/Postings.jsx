import React from "react";
import { useEffect } from "react";
import { fetchUser } from "../API";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { postPost } from "../API";

export default function Postings() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { token } = useAuth();

  return (
    <div className="createPost">
      <h1 className="PostFormTitle">Create Post</h1>
      <form
        className="gradient-border"
        id="box1"
        onSubmit={async (e) => {
          e.preventDefault();
          const data = {
            title,
            description,
            price,
          };
          console.log("token on bill", token);
          await postPost(token, data);
          navigate("/");
        }}
      >
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br></br>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br></br>
        <label>Price:</label>
        <input
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <br></br>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
