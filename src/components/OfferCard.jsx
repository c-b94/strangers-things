import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function OfferCard(props) {
  const { user } = useAuth();
  console.log("offerCard", props);
  console.log("is it me", user);
  function messageButton() {
    if (props.seller.username != user.username && props.seller.username != undefined) {
      return (
        <div>
          <button>
            <Link to={`/MessageForm/${props.seller._id}`}>
              Message {props.seller.username}
            </Link>
          </button>
        </div>
      );
    }
  }
  
  return (
    <div className="offercardcontainer">
      <div className="cardheading">
        <span>{props.seller.username}</span>
      </div>
      <div className="cardcontents">
        {/* <div>insert image here</div> */}
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        <p>${props.price}</p>
      </div>
      {messageButton()}
    </div>
  );
}
