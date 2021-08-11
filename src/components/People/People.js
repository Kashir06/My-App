import React from "react";

import { Avatar } from "@material-ui/core";

import "./People.css";

function People({ profileSrc, title }) {
  return (
    <div className="people">
      <Avatar className="people__avatar" src={profileSrc} />
      <div className="greenPoint"></div>
      <h4>{title}</h4>
    </div>
  );
}

export default People;
