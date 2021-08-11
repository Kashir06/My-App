import React, { useState } from "react";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// import { useStateValue } from "../../hooks/StateProvider";
// import db from "../../firebase";

import "./PostLiker.css";

function PostLiker({ postId }) {
  // const { user } = useStateValue()[0];

  const [likesCounter, setLikesCounter] = useState(0);

  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);

  const likeHandler = () => {
    const likes = likesCounter + 1;

    // db.collection("likes").add({
    //   likes: likes,
    //   postId: postId,
    //   likerUsername: user.displayName,
    // });

    setLikesCounter(likes);
    setLikeClicked(true);
    setDislikeClicked(false);
  };

  const dislikeHandler = () => {
    const likes = likesCounter - 1;

    setLikesCounter(likes);
    setDislikeClicked(true);
    setLikeClicked(false);
  };

  console.log(likesCounter);

  return (
    <React.Fragment>
      <div className="post__optionLike">
        {!likeClicked && <ExpandLessIcon onClick={likeHandler} />}
      </div>

      <div className="postLikes">{likesCounter}</div>

      <div className="post__optionLike">
        {!dislikeClicked && <ExpandMoreIcon onClick={dislikeHandler} />}
      </div>
    </React.Fragment>
  );
}

export default PostLiker;
