import React, { useState } from "react";

import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { useStateValue } from "../../hooks/StateProvider";
import db from "../../firebase";
import firebase from "firebase";

import "./MessageSender.css";

function MessageSender() {
  const { user } = useStateValue()[0];

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input === "") {
      alert("Please fill the input to post your feed");
    } else {
      db.collection("posts").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
      });
    }

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            placeholder="Image URL (Optional)"
          />

          <Button onClick={handleSubmit} type="submit">
            Post
          </Button>
        </form>
      </div>
    </div>
  );
}

export default MessageSender;
