import React, { useEffect, useState } from "react";

import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMeOutlined";

import PostComment from "./PostComment";
import PostCommentForm from "./PostCommentForm";
import PostLiker from "./PostLiker";

import db from "../../firebase";

import "./Post.css";

function Post({ postId, profilePic, image, username, timestamp, message }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    db.collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setComments(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">

        <PostLiker postId={postId} />
        
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
      </div>

      {comments
        .filter((commentPostId) => commentPostId.data.postId === postId)
        .map((postComment) => (
          <PostComment
            commentPostId={postComment.data.postId}
            commentId={postComment.id}
            commentProfilePic={postComment.data.commentProfilePic}
            commentUsername={postComment.data.commenterUsername}
            comment={postComment.data.comment}
            commentTimestamp={postComment.data.timestamp}
            checkId={postId}
          />
        ))}

      <PostCommentForm profilePic={profilePic} postId={postId} />
    </div>
  );
}

export default Post;
