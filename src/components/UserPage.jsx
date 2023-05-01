import React from "react";
import { useEffect } from "react";
import { fetchUser } from "../API";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import OfferCard from "./OfferCard";

export default function UserPage(props) {
  const[user, setUser] = useState({})
  console.log("current user", user);
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getMyUserProfile() {
      const result = await fetchUser(props.token);

      setUser(result);
      setName(result.data.username);
      setMessages(result.data.messages);
      setPosts(result.data.posts);
    }

    getMyUserProfile();
  }, []);
  console.log("testing userInfo",posts);
  return (
    <div className="textbox1">
      <h1>{name}</h1>
      <div>
        <h2>Messages</h2>
        <div className="textbox1">{messages}</div>
      </div>
      <div>
        <h2>Posts</h2>
        <div className="textbox1">
          {posts.map((offer) => {
            return (
              <OfferCard
                key={offer._id}
                seller={offer.author}
                title={offer.title}
                description={offer.description}
                location={offer.location}
                price={offer.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
