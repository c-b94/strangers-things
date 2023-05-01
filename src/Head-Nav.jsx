import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

export default function HeadNav() {
  const Navigate = useNavigate();
  const { token, user, setToken } = useAuth();
  console.log("user",user)
  console.log("current token:",token)
  function userButtons() {
    if (token) {
      return (
        <div>
          
          <button
            onClick={() => {
              Navigate("/users/me");
            }}
          >
            {user.username}
          </button>
          <button
            onClick={() => {
              Navigate("/posts");
            }}
          >
            post to sale
          </button>
          <button onClick={() => {
            setToken(null);
            localStorage.removeItem("Token")
            Navigate("/")
          }}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            onClick={() => {
              Navigate("/login");
            }}
          >
            signin/register
          </button>
        </div>
      );
    }
  }
  return (
    <div className="headingcontainer">
      <div className="topOfHeader">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 navbutton"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <h1
          onClick={() => {
            Navigate("/");
          }}
        >
          Stranger's Things
        </h1>
        {userButtons()}
      </div>
          
      <div>
        <form action="">
          <input className="searchbar" type="text" placeholder="  search" />
        </form>
      </div>
    </div>
  );
}
