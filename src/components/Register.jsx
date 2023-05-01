import React from "react";
import { useState } from "react";
import { postUsersRegister } from "../API";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("username", username);
    console.log("password", password);
    const result = await postUsersRegister(username, password);
    setUsername("");
    setPassword("");
    if (result) {
      navigate("/login");
    }
  }

  return (
    <div>
      <h1>Registration</h1>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="">UserName</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <button>Register</button>
      </form>
    </div>
  );
}
