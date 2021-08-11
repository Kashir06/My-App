import React /*,{ useState }*/ from "react";

import { Avatar } from "@material-ui/core";

import "./PostComment.css";

function PostComment({
  commentProfilePic,
  commentUsername,
  comment,
  commentTimestamp,
  commentPostId,
  checkId,
}) {
  return (
    <React.Fragment>
      {checkId === commentPostId ? (
        <div className="post__comments">
          <div className="post__commentTop">
            <Avatar src={commentProfilePic} className="post__commentAvatar" />
            <div className="post__commentTopInfo">
              <h5>{commentUsername}</h5>
              <p>{comment}</p>
            </div>
          </div>

          <div className="post__commentOptions">
            <div className="post__commentOption">
              <p>Like</p>
            </div>
            ·
            <div className="post__commentOption">
              <p>Reply</p>
            </div>
            ·
            <div className="post__commentOption">
              <p className="post__commentOptionDate">
                {new Date(commentTimestamp?.toDate()).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default PostComment;
