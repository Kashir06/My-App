import React, { useState } from "react";

import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import GifIcon from "@material-ui/icons/Gif";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { Avatar } from "@material-ui/core";

import { useStateValue } from "../../hooks/StateProvider";

import db from "../../firebase";
import firebase from "firebase";

import "./PostCommentForm.css";

function PostCommentForm({ postId }) {
  const { user } = useStateValue()[0];

  const [input, setInput] = useState("");

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (input === "") {
      alert("Please type something to post comment.");
    } else {
      db.collection("comments").add({
        comment: input,
        postId: postId,
        commentProfilePic: user.photoURL,
        commenterUsername: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
  };

  return (
    <div className="postComments__form">
      <div className="postComment__form">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a comment..."
          />
          <EmojiEmotionsOutlinedIcon />
          <CameraAltOutlinedIcon />
          <GifIcon />
          <ImageOutlinedIcon />
          <button onClick={handleCommentSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostCommentForm;
